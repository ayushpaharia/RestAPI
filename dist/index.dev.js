"use strict";

var express = require("express");

var app = express();

var mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", function (error) {
  console.log(error);
});
db.once("open", function (error) {
  console.log("Connected to Database!");
});
app.use(express.json());

var subscribersRouter = require("./routes/subscribers.routes");

app.use("/subscribers", subscribersRouter);
app.listen(3000, function () {
  console.log("Server Started!");
});