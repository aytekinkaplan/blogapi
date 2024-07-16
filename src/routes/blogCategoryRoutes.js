"use strict";
const router = require("express").Router();
const {
  create,
  readAll,
  read,
  update,
  delete: deleteCategory,
} = require("../controllers/blogCategoryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, create);
router.get("/", readAll);
router.get("/:id", read);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, deleteCategory);

module.exports = router;
