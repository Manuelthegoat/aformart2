const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(
  express.static(
    path.resolve(__dirname, "../../client/src/Pages/Checkout/Checkout.jsx")
  )
);

router.post("/checkout", (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);
    console.log(req.body.post);
  }
});

module.exports = router;
