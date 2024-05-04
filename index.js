const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { connectMongoDb } = require("./connection.js");
const productRouter = require("./routes/products.js");

const app = express();

const PORT = 8000;

//CONNECTION
connectMongoDb("mongodb://127.0.0.1:27017/products-app")
  .then(() => {
    console.log("Database connection open...");
  })
  .catch((err) => console.log("Error in establishing connection to DB", err));

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter);

// app.get("/", (req, res) => {
//   res.end("<h1>hello world</h1>");
// });
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
