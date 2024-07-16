"use strict";
const BlogPost = require("../models/blogPostModel");

const create = async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const readAll = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate("categoryId");
    res.send(posts);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const read = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id).populate("categoryId");
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    res.send(post);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    res.send(post);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).send({ error: "Post not found" });
    }
    res.send({ message: "Post deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { create, readAll, read, update, delete: deletePost };
