"use strict";

module.exports = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("Error:", err);
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
