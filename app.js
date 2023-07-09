require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 4000;
//components
const apiRouter = require("./app/routes/api-router");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("Database connected");
      console.log("your server is running on localhost//:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
