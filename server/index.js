const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

const checkoutRoute = require("./routers/checkout");
app.post("/api/checkout", checkoutRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
