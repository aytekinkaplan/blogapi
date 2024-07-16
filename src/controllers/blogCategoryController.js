"use strict";
const BlogCategory = require("../models/blogCategoryModel");

module.exports.create = async (req, res, next) => {
  try {
    const category = await BlogCategory.create(req.body);
    res.status(201).send({ error: false, result: category });
  } catch (err) {
    next(err);
  }
};

module.exports.readAll = async (req, res, next) => {
  try {
    const categories = await BlogCategory.find();
    res.send({ error: false, result: categories });
  } catch (err) {
    next(err);
  }
};

module.exports.read = async (req, res, next) => {
  try {
    const category = await BlogCategory.findById(req.params.id);
    if (!category)
      return res
        .status(404)
        .send({ error: true, message: "Category not found" });
    res.send({ error: false, result: category });
  } catch (err) {
    next(err);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const category = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!category)
      return res
        .status(404)
        .send({ error: true, message: "Category not found" });
    res.send({ error: false, result: category });
  } catch (err) {
    next(err);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const category = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!category)
      return res
        .status(404)
        .send({ error: true, message: "Category not found" });
    res.send({ error: false, result: category });
  } catch (err) {
    next(err);
  }
};
