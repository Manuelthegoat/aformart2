const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const checkoutData = require("../models/checkout.js");

require("dotenv").config();

// CONNECTION TO DATABASE
main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to DB")
  );
}

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
// const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };
router.use(cors());

// Get the client data on submit
router.post("/api/checkout", async (request, response) => {
  const user = new checkoutData(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/api/checkout", async (request, response) => {
  const users = await checkoutData.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
