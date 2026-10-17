# 📈 TradePilot

A full-stack stock trading dashboard built with the MERN stack. TradePilot has a public marketing website, a simple sign up / sign in system, and a trading dashboard with holdings, positions, a watchlist, charts, and order placement, all backed by MongoDB Atlas.

### 🔗 Live Demo

| Part | Link |
|---|---|
| 🌐 Website (start here) | **[https://tradepilot-frontend-0c6z.onrender.com](YOUR_FRONTEND_LINK_HERE)** |
| 📊 Dashboard | [https://tradepilot-dashboard.onrender.com](YOUR_DASHBOARD_LINK_HERE) |
| ⚙️ Backend API | [https://tradepilot-backend-oj8j.onrender.com/allHoldings](YOUR_BACKEND_LINK_HERE) |

> ⏳ **Heads up:** the backend runs on Render's free plan, which goes to sleep after about 15 minutes without traffic. The first request after a pause can take up to a minute. If Sign In seems stuck, wait a moment and try again.
>
> The demo uses sample market data and no real money. Create your own account to try it, or use a throwaway email and password.

---

## 📖 About

TradePilot is a learning-focused trading platform inspired by modern broker dashboards. It shows how a real full-stack app fits together:

- A **React + Vite** website where visitors learn about the product and create an account.
- A separate **React + Vite dashboard** where signed-in users view their portfolio and place orders.
- A **Node.js + Express** REST API that handles authentication and trading data.
- A **MongoDB Atlas** database that stores users, holdings, positions, and orders.

The three parts are deployed independently and talk to each other over HTTPS.

---

## ✨ Features

**Website (frontend)**
- Home, Products, Pricing, Support, and About pages
- Sign Up page (name, email, password) with validation and duplicate-email protection
- Sign In page with clear error messages
- Responsive layout built with Bootstrap

**Dashboard**
- Protected: only signed-in users can open it, otherwise they are sent to Sign In
- Summary, Orders, Holdings, Positions, Funds, and Apps pages
- Watchlist of stocks with a Buy window
- Holdings and positions loaded from MongoDB
- Interactive charts (Chart.js): holdings bar graph and watchlist doughnut chart
- Logout button in the top-right corner

**Backend**
- Passwords are hashed with a salted `scrypt` hash (Node's built-in `crypto`), never stored as plain text
- Signed login token that expires after 24 hours
- CORS restricted to the frontend and dashboard URLs
- All secrets come from environment variables

---

## 🧰 Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router, Bootstrap |
| Dashboard | React, Vite, React Router, Material UI, Chart.js (`react-chartjs-2`), Axios |
| Backend | Node.js, Express, Mongoose, CORS, dotenv |
| Database | MongoDB Atlas |
| Hosting | Render (1 Web Service + 2 Static Sites) |

---

## 🏗️ Architecture

```
                     ┌──────────────────────────┐
  Visitor ─────────► │  Frontend (Static Site)  │
                     │  Sign Up / Sign In       │
                     └───────────┬──────────────┘
                                 │ POST /signup, /signin
                                 ▼
                     ┌──────────────────────────┐        ┌───────────────┐
                     │  Backend (Web Service)   │◄──────►│ MongoDB Atlas │
                     │  Express REST API        │        └───────────────┘
                     └───────────▲──────────────┘
                                 │ GET /me, /allHoldings, /allPositions, POST /newOrder
                     ┌───────────┴──────────────┐
  After sign in ───► │  Dashboard (Static Site) │
                     └──────────────────────────┘
```

**How login works**

1. You sign up. The backend hashes your password and saves the user in MongoDB.
2. You sign in. The backend checks the password and returns a signed token.
3. The frontend redirects you to the dashboard and passes the token in the URL fragment (`#token=...`).
4. The dashboard saves the token in the browser, removes it from the address bar, and calls `GET /me` to confirm it is valid.
5. If the token is missing or invalid, the dashboard sends you back to the Sign In page.
6. Logout deletes the saved token and returns you to Sign In.

---

## 📁 Project Structure

```
TradePilot/
├── backend/
│   ├── index.js            # Express app, routes, MongoDB connection
│   ├── auth.js             # Password hashing + login token helpers
│   ├── model/              # Mongoose models (Holdings, Positions, Orders, User)
│   ├── schemas/            # Mongoose schemas
│   └── .env.example        # Template for your environment variables
├── frontend/               # Marketing website + Sign Up / Sign In (port 5173)
│   └── src/
│       ├── config.js       # Reads VITE_API_URL and VITE_DASHBOARD_URL
│       └── landing_page/   # Home, Products, Pricing, Support, About, Signup, Signin
└── dashboard/              # Trading dashboard (port 5174)
    └── src/
        ├── config.js       # Reads VITE_API_URL and VITE_FRONTEND_URL
        ├── components/     # Summary, Holdings, Positions, Orders, WatchList, TopBar...
        └── data/           # Sample watchlist data
```

---

## 🚀 Run It Locally

### Prerequisites
- [Node.js](https://nodejs.org/) **20.19 or newer** (required by Vite 8)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster and its connection string
- Git

### 1. Clone the repository
```bash
git clone https://github.com/RamanKumar-Dev/TradePilot.git
cd TradePilot
```

### 2. Set up the backend
```bash
cd backend
npm install
cp .env.example .env
```
Open `backend/.env` and fill in your own values:
```env
PORT=3002
ATLASDB_URL=your_mongodb_connection_string
AUTH_SECRET=any_long_random_string
```
Generate a good `AUTH_SECRET` with:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Start it:
```bash
npm start
```
You should see `App started!` and `Connected to DB`. Backend runs at **http://localhost:3002**.

### 3. Start the frontend (new terminal)
```bash
cd frontend
npm install
npm run dev
```
Opens at **http://localhost:5173**.

### 4. Start the dashboard (new terminal)
```bash
cd dashboard
npm install
npm run dev
```
Opens at **http://localhost:5174**.

No `.env` files are needed for the frontend or dashboard locally. They default to the localhost addresses above.

---

## 🧭 How to Use TradePilot

1. Open the website (`http://localhost:5173` locally, or the live link above).
2. Click **Sign Up**, enter your name, email, and a password of at least 6 characters, then submit.
3. After the success message you are taken to **Sign In**. Enter the same email and password.
4. You land on the **Dashboard**. Use the top menu to move between pages:
   - **Dashboard**: summary of your account
   - **Orders**: orders placed during the session
   - **Holdings**: long-term stocks with profit and loss, plus a chart
   - **Positions**: current open positions
   - **Funds** and **Apps**: account funds and connected apps pages
5. In the **watchlist** on the left, hover over a stock and click **Buy** to open the order window, enter quantity and price, and submit. The order is saved to MongoDB.
6. Click **Logout** in the top-right corner to end your session. You return to the Sign In page and cannot open the dashboard again until you sign in.

---

## 🔌 API Reference

Base URL: `http://localhost:3002` locally, or your Render backend URL online.

| Method | Route | Auth | Description |
|---|---|---|---|
| `POST` | `/signup` | No | Create an account. Body: `{ name, email, password }` |
| `POST` | `/signin` | No | Sign in. Body: `{ email, password }`. Returns `{ token, user }` |
| `GET` | `/me` | Bearer token | Returns the signed-in user, or `401` if not signed in |
| `POST` | `/logout` | No | Confirms logout (the browser deletes its own token) |
| `GET` | `/allHoldings` | No | Returns all holdings |
| `GET` | `/allPositions` | No | Returns all positions |
| `POST` | `/newOrder` | No | Saves a new order |

Send the token as: `Authorization: Bearer <token>`

---

## ☁️ Deployment (Render)

TradePilot runs as three Render services from one GitHub repository.

| Service | Type | Root Directory | Build Command | Start Command / Publish Dir |
|---|---|---|---|---|
| `tradepilot-backend` | Web Service | `backend` | `npm install` | Start: `node index.js` |
| `tradepilot-frontend` | Static Site | `frontend` | `npm install && npm run build` | Publish: `dist` |
| `tradepilot-dashboard` | Static Site | `dashboard` | `npm install && npm run build` | Publish: `dist` |

Both static sites need a **Rewrite** rule so page refreshes work: Source `/*` → Destination `/index.html`.

### Environment variables

| Variable | Set on | Purpose |
|---|---|---|
| `ATLASDB_URL` | Backend | MongoDB Atlas connection string |
| `AUTH_SECRET` | Backend | Secret used to sign login tokens |
| `FRONTEND_URL` | Backend | Frontend's public URL (for CORS) |
| `DASHBOARD_URL` | Backend | Dashboard's public URL (for CORS) |
| `VITE_API_URL` | Frontend and Dashboard | Backend's public URL |
| `VITE_DASHBOARD_URL` | Frontend | Dashboard's public URL |
| `VITE_FRONTEND_URL` | Dashboard | Frontend's public URL |

URLs must start with `https://` and have no trailing path. Vite variables are baked in at build time, so redeploy a static site after changing them.

In MongoDB Atlas, add Render to **Network Access** (Render's free plan has no fixed IP, so this usually means `0.0.0.0/0`). Protect the database with a strong password and a least-privilege database user.

---

## 🔒 Security Notes

- Never commit `.env` files. They are listed in `.gitignore`.
- Passwords are stored only as salted `scrypt` hashes.
- Login tokens are signed with `AUTH_SECRET` and expire after 24 hours.
- CORS only allows the configured frontend and dashboard origins.

---

## ⚠️ Known Limitations

- The holdings, positions, and orders API routes are not yet protected by the login token. Only the dashboard screen is guarded.
- Holdings and positions are not tied to individual users yet.
- Watchlist prices are sample data, not live market data.
- The **Sell** button is a UI placeholder. Only Buy orders are saved.
- The Orders page does not list saved orders yet.
- Logout only removes the token in the browser. A copied token stays valid until it expires.
- There is no email verification, password reset, or rate limiting.

## 🛣️ Roadmap

- [ ] Protect all data routes with the login token
- [ ] Link holdings, positions, and orders to each user
- [ ] Sell orders and a real Orders history page
- [ ] Live market data from a stock API
- [ ] Password reset and email verification

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 👤 Author

**Raman Kumar**, [@RamanKumar-Dev](https://github.com/RamanKumar-Dev)

If you like this project, give it a ⭐ on GitHub!

## 📄 License

This project is for learning and portfolio purposes.