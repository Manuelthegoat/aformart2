const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  express.static(path.resolve(__dirname, ".././client/pages/checkout.jsx"))
);

router.post("/cart", (req, res) => {
  let {} = req.body;
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);
  }
});

module.exports = router;
