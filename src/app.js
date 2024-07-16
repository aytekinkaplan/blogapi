"use strict";
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const blogCategoryRoutes = require("./routes/blogCategoryRoutes");
const blogPostRoutes = require("./routes/blogPostRoutes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/categories", blogCategoryRoutes);
app.use("/api/posts", blogPostRoutes);

app.use(errorHandler);

module.exports = app;
