"use strict";
const mongoose = require("mongoose");

const BlogCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "blogCategories",
    timestamps: true,
  }
);

module.exports = mongoose.model("BlogCategory", BlogCategorySchema);
