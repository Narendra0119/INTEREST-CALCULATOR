const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("InterWise Backend Running ✅");
});

app.post("/calculate", (req, res) => {
  let { p, r, t, type, unit } = req.body;

  p = parseFloat(p);
  r = parseFloat(r);
  t = parseFloat(t);

  if (unit === "months") {
    t = t / 12;
  }

  let interest = 0;
  let total = 0;

  if (type === "simple") {
    interest = (p * r * t) / 100;
    total = p + interest;
  } else {
    let amount = p * Math.pow((1 + r / 100), t);
    interest = amount - p;
    total = amount;
  }

  res.json({
    interest: interest.toFixed(2),
    total: total.toFixed(2)
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});