const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/pages/checkout.jsx")));

app.post("/cart", (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  } else {
    res.sendStatus(200);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
