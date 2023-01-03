const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");

const formData = require("../models/checkout.js");

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use((req, res, next) => {
  // Change CORS Origin on deployment
  res.setHeader("Access-Control-Allow-Origin", "http:localhost:3000");

  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
router.post("/api/checkout", cors(), async (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);
    console.log("connected");
    const vals = Object.keys(req.body).map(function (key) {
      return req.body[key];
    });
  }
});

module.exports = router;
