const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PostSchema = new mongoose.Schema(
    { 
        author: {
        type: String,
        required: [true, "The name of the author is required if you'd like us to display it on the dashboard"],
        minLength: [3, "Author name must be at least 3 characters"],
        maxLength: [28, "Author name can be no longer than 28 characters!"],},
        
        title: {
        type: String,
        unique: true,
        uniqueCaseInsensitive: true,
        required: [true, "A post title is required if you'd like us to display it on the dashboard"],
        minLength: [3, "Post title must be at least 3 characters"],
        maxLength: [55, "Post title can be no longer than 55 characters!"],},

        description: {
        type: String,
        required: [true, "A description of your post is required if you'd like us to display it on the dashboard"],
        minLength: [3, "Post description must be at least 3 characters"],},

        content: {
        type: String,
        required: [true, "Post content is required, otherwise we will not add this to the database"],
        minLength: [10, "Post must be at least 10 characters"],},
    },
        { timestamps: true },
        );

PostSchema.plugin(uniqueValidator, { message: 'Oops, looks like we already have a post with this title in our system.' })

module.exports = mongoose.model("Blog", PostSchema);