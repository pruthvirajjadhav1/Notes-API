const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const router = require("./routes/router");
const rateLimter = require("./middleware/rateLimiter");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Notes API is Live Let's Gooo 🤖🚀");
});

app.use(cors());
app.use(rateLimter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Notes API is Live Let's Gooo 🤖");
});

module.exports = app;
