import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/api/post", { title, author, description, content })
        .then((response) => {
        console.log(response);
        navigate("/");
        })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        });
    };

    return (
    <div className="container">
        <Link style={{ width: "100%", display: 'flex', justifyContent: 'end' }} to="/">Back to all posts</Link>
        <h3 className="fronttitle">Create A New Interior Architects Blog Post</h3>
        <div className="bodyform">
        <div className="col-12">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="column">
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter your blog title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
                {errors.title ? <p>{errors.title.message}</p> : null}
                <label htmlFor="author">Author:</label>
                <input
                type="text"
                className="form-control"
                placeholder="Enter the author of the blog"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                />
                {errors.author ? <p>{errors.author.message}</p> : null}
                
                <label htmlFor="description">Blog Description:</label>
                <textarea name="description" cols="40" rows="5"
                type="textarea"
                className="form-control"
                placeholder="Enter a captivating description of your blog"

                onChange={(e) => setDescription(e.target.value)}
                value={description}
                ></textarea>
                {errors.description ? <p>{errors.description.message}</p> : null}

                <label htmlFor="content">Content:</label>
                <textarea name="content" cols="40" rows="5"
                type="textarea"
                className="form-control"
                placeholder="Write your blog post here"

                onChange={(e) => setContent(e.target.value)}
                value={content}
                ></textarea>
                {errors.content ? <p>{errors.content.message}</p> : null}
                </div>
            </div>
            <span className='deletePost'>
            <button className="btn btn-primary" type="submit">Add Blog Post </button>
            </span>
            </form>
        </div>
        </div>
    </div>
    );
};

export default PostForm;