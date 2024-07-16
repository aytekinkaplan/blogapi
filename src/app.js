"use strict";
const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./utils/dbConnection");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

dbConnection();

app.get("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

app.use("/auth", require("./routes/authRoutes"));
app.use("/categories", require("./routes/blogCategoryRoutes"));
app.use("/posts", require("./routes/blogPostRoutes"));

app.use(errorHandler);

module.exports = app;
