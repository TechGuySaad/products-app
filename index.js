const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8000;

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("<h1>hello world</h1>");
});
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
