"use strict";
const router = require("express").Router();
const {
  create,
  readAll,
  read,
  update,
  delete: deletePost,
} = require("../controllers/blogPostController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, create);
router.get("/", readAll);
router.get("/:id", read);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
