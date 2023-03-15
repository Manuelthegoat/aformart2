const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.mongoUrl);
// }

app.use(require("./routers/checkout"));

const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToCluster();
  console.log(`Server is running on port: ${port}`);
});
