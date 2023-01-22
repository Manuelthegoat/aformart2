const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");

const formData = require("../models/checkout.js");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
router.use(cors(corsOptions));

router.post("/api/checkout", cors(), async (req, res) => {
  if (!req.body) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);

    const vals = Object.entries(req.body).map();
    return vals;
  }
});

module.exports = router;
