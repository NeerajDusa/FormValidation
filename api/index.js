const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const userRoute = require("./routes/user");
// const authRoute = require("./routes/auth");
const formRoute = require("./routes/form");

const fs=require('fs')
const MONGODB_URI = process.env.MONGO_URL
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use(express.static("build"));
app.use(express.json());

app.use("/api/form", formRoute);


const PORT = process.env.PORT || 5000
app.listen(PORT || 5000, () => {
  console.log("Backend server is running!");
});

module.exports = app
