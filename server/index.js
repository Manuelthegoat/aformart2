const express = require("express");
const app = express();
const checkout = require("./routers/checkout");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.mongoUrl);
}

app.use(checkout);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
