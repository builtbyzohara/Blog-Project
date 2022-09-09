const Post = require("../models/post.model");

const createNewPost = (req, res) => {
    Post.create(req.body)
    .then((newPost) => {
        res.json({ newPost });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getAllPosts = (req, res) => {
    Post.find()
    .then((allPosts) => {
        res.json(allPosts);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getOnePost = (req, res) => {
    Post.findOne({ _id: req.params.id })
    .then((requestedPost) => {
        res.json(requestedPost);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const updatePost = (req, res) => {
    Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
    })
    .then((updatedPost) => {
        res.json({ updatedPost });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const deleteExistingPost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
    .then((deletedPost) => {
        res.json({ deletedPost });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

module.exports = {
    createNewPost,
    getAllPosts,
    getOnePost,
    updatePost,
    deleteExistingPost,
};