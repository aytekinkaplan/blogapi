"use strict";
const router = require("express").Router();
const blogPostController = require("../controllers/blogPostController");
const authMiddleware = require("../middleware/authMiddleware");

router
  .route("/")
  .post(authMiddleware, blogPostController.create)
  .get(blogPostController.readAll);

router
  .route("/:id")
  .get(blogPostController.read)
  .put(authMiddleware, blogPostController.update)
  .delete(authMiddleware, blogPostController.delete);

module.exports = router;
