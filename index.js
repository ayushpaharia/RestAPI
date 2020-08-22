const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", (error) => {
  console.log("Connected to Database!");
});

app.use(express.json());

const subscribersRouter = require("./routes/subscribers.routes");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => {
  console.log("Server Started!");
});
