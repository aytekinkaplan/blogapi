"use strict";
const BlogCategory = require("../models/blogCategoryModel");

const create = async (req, res) => {
  try {
    const category = new BlogCategory(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const readAll = async (req, res) => {
  try {
    const categories = await BlogCategory.find();
    res.send(categories);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const read = async (req, res) => {
  try {
    const category = await BlogCategory.findById(req.params.id);
    if (!category) {
      return res.status(404).send({ error: "Category not found" });
    }
    res.send(category);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const category = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!category) {
      return res.status(404).send({ error: "Category not found" });
    }
    res.send(category);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ error: "Category not found" });
    }
    res.send({ message: "Category deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { create, readAll, read, update, delete: deleteCategory };
