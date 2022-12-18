const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  express.static(
    path.resolve(__dirname, "../../client/src/Pages/Checkout/Checkout.jsx")
  )
);

router.use((req, res, next) => {
  // Change CORS Origin
  res.setHeader("Access-Control-Allow-Origin", "http:localhost:3000");

  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
router.post("/checkout", (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);
    console.log(req.body.post);
  }
});

module.exports = router;
