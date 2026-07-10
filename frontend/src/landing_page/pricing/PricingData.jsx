const PricingData = {
  equity: {
    headers: [
      "Equity delivery",
      "Equity intraday",
      "F&O - Futures",
      "F&O - Options",
    ],

    rows: [
      {
        charge: "Brokerage",
        values: [
          "Zero Brokerage",
          "0.03% or Rs. 20/executed order whichever is lower",
          "0.03% or Rs. 20/executed order whichever is lower",
          "Flat Rs. 20 per executed order",
        ],
      },

      {
        charge: "STT/CTT",
        values: [
          "0.1% on buy & sell",
          "0.025% on the sell side",
          "0.05% on the sell side",
          [
            "0.15% of the intrinsic value on options that are bought and exercised",
            "0.15% on sell side (on premium)",
          ],
        ],
      },

      {
        charge: "Transaction charges",
        values: [
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00307%\nBSE: 0.00375%",
          "NSE: 0.00183%\nBSE: 0",
          "NSE: 0.03553% (on premium)\nBSE: 0.0325% (on premium)",
        ],
      },

      {
        charge: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },

      {
        charge: "SEBI charges",
        values: ["₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
      },

      {
        charge: "Stamp charges",
        values: [
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    ],
  },

  currency: {
    headers: ["Currency futures", "Currency options"],

    rows: [
      {
        charge: "Brokerage",
        values: [
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },

      {
        charge: "STT/CTT",
        values: ["No STT", "No STT"],
      },

      {
        charge: "Transaction charges",
        values: ["NSE: 0.00035%\nBSE: 0.00045%", "NSE: 0.0311%\nBSE: 0.001%"],
      },

      {
        charge: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },

      {
        charge: "SEBI charges",
        values: ["₹10 / crore", "₹10 / crore"],
      },

      {
        charge: "Stamp charges",
        values: [
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      },
    ],
  },

  commodity: {
    headers: ["Commodity futures", "Commodity options"],

    rows: [
      {
        charge: "Brokerage",
        values: [
          "0.03% or Rs. 20/executed order whichever is lower",
          "₹20/executed order",
        ],
      },

      {
        charge: "STT/CTT",
        values: ["0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      },

      {
        charge: "Transaction charges",
        values: ["MCX: 0.0021%\nNSE: 0.0001%", "MCX: 0.0418%\nNSE: 0.001%"],
      },

      {
        charge: "GST",
        values: [
          "18% on (brokerage + SEBI charges + transaction charges)",
          "18% on (brokerage + SEBI charges + transaction charges)",
        ],
      },

      {
        charge: "SEBI charges",
        values: ["Agri:\n₹1 / crore\nNon-Agri:\n₹10 / crore", "₹10 / crore"],
      },

      {
        charge: "Stamp charges",
        values: [
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      },
    ],
  },
};

export default PricingData;
