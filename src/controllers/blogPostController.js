"use strict";
const BlogPost = require("../models/blogPostModel");

module.exports.create = async (req, res, next) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).send({ error: false, result: post });
  } catch (err) {
    next(err);
  }
};

module.exports.readAll = async (req, res, next) => {
  try {
    const posts = await BlogPost.find().populate("categoryId", "name");
    res.send({ error: false, result: posts });
  } catch (err) {
    next(err);
  }
};

module.exports.read = async (req, res, next) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate(
      "categoryId",
      "name"
    );
    if (!post)
      return res.status(404).send({ error: true, message: "Post not found" });
    res.send({ error: false, result: post });
  } catch (err) {
    next(err);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post)
      return res.status(404).send({ error: true, message: "Post not found" });
    res.send({ error: false, result: post });
  } catch (err) {
    next(err);
  }
};

module.exports.delete = async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post)
      return res.status(404).send({ error: true, message: "Post not found" });
    res.send({ error: false, result: post });
  } catch (err) {
    next(err);
  }
};
