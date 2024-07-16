"use strict";
const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

module.exports = mongoose.model("BlogPost", BlogPostSchema);
