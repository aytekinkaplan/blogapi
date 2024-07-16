"use strict";
const router = require("express").Router();
const blogCategoryController = require("../controllers/blogCategoryController");
const authMiddleware = require("../middleware/authMiddleware");

router
  .route("/")
  .post(authMiddleware, blogCategoryController.create)
  .get(blogCategoryController.readAll);

router
  .route("/:id")
  .get(blogCategoryController.read)
  .put(authMiddleware, blogCategoryController.update)
  .delete(authMiddleware, blogCategoryController.delete);

module.exports = router;
