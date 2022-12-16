const express = require("express");
const app = express();
const checkout = require("./routers/checkout");

app.use(checkout);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
