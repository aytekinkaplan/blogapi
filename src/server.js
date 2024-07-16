"use strict";
require("dotenv").config();
const app = require("./app");
const connectDB = require("./utils/dbConnection");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
