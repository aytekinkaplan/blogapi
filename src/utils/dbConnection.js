"use strict";
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB || "mongodb://localhost:27017/blogAPI", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("* DB Connected."))
    .catch((err) => console.error("* DB Not Connected:", err));
};

module.exports = dbConnection;
