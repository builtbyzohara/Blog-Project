const postController = require("../controllers/post.controller");

module.exports = (app) => {
    app.post("/api/post", postController.createNewPost);
    app.get("/api/post", postController.getAllPosts);
    app.get("/api/post/:id", postController.getOnePost);
    app.delete("/api/post/:id", postController.deleteExistingPost);
    app.put("/api/post/:id", postController.updatePost);
};