require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { UserModel } = require('./model/UserModel');
const auth = require('./auth');

const app = express();
// Sites allowed to call this backend: local dev + deployed frontend/dashboard (from env)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
]
  .filter(Boolean)
  .map((url) => url.replace(/\/+$/, '')); // remove any trailing slash
app.use(cors({ origin: allowedOrigins }));
app.use(bodyParser.json());

if (!process.env.AUTH_SECRET) {
  console.error("AUTH_SECRET is missing. Add it to your .env file (or Render environment variables).");
  process.exit(1);
}

const PORT = process.env.PORT || 3002;
const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

// app.get('/addHoldings', async (req, res) => {
//   const tempHoldings = [
//     { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//     { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//     { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//     { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%" },
//     { name: "ITC", qty: 5, avg: 202, price: 207.9, net: "+2.92%", day: "+0.80%" },
//     { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//     { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%" },
//     { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//     { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%" },
//     { name: "SGBMAY29", qty: 2, avg: 4727, price: 4719, net: "-0.17%", day: "+0.15%" },
//     { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%" },
//     { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%" },
//     { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" }
//   ];

//   try {
//     // Clear existing development sample data before re-inserting.
//     await HoldingsModel.deleteMany({});
//     const savedHoldings = await HoldingsModel.insertMany(tempHoldings);

//     res.json({
//       message: "Holdings inserted successfully",
//       count: savedHoldings.length
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to insert holdings" });
//   }
// });

// app.get('/addPositions', async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   try {
//     // Clear existing development sample data before re-inserting.
//     await PositionsModel.deleteMany({});
//     const savedPositions = await PositionsModel.insertMany(tempPositions);

//     res.json({
//       message: "Positions inserted successfully",
//       count: savedPositions.length
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to insert positions" });
//   }
// });

// ---------- Auth routes ----------
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const cleanEmail = email.toLowerCase().trim();
    const existing = await UserModel.findOne({ email: cleanEmail });
    if (existing) {
      return res.status(409).json({ message: "An account with this email already exists" });
    }

    await UserModel.create({ name: name.trim(), email: cleanEmail, password: auth.hashPassword(password) });
    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user || !auth.verifyPassword(password, user.password)) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = auth.createToken(user._id.toString());
    res.json({ message: "Signed in", token, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// The browser deletes its own token on logout; this route just confirms it.
app.post("/logout", (req, res) => {
  res.json({ message: "Logged out" });
});

app.get("/me", async (req, res) => {
  const userId = auth.readToken(auth.getTokenFromRequest(req));
  const user = userId && (await UserModel.findById(userId).select("name email"));
  if (!user) {
    return res.status(401).json({ message: "Not logged in" });
  }
  res.json({ user: { name: user.name, email: user.email } });
});

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order Saved!");
})

app.listen(PORT, () => {
  console.log("App started!");
});