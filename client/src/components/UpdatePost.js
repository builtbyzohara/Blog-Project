import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../App.css';

const EditPost = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState("");
    const [postAuthor, setPostAuthor] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [postContent, setPostContent] = useState("");
    const [errors, setErrors] = useState({});
    console.log(id);
    useEffect(() => {
    axios.get(`http://localhost:8000/api/post/${id}`)
        .then((response) => {
        console.log(response.data);
        setPostTitle(response.data.title);
        setPostAuthor(response.data.author);
        setPostDescription(response.data.description);
        setPostContent(response.data.content);
        })
        .catch((err) => {
        console.log(err.response);
        });
    }, [id]);

    const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/post/${id}`, { title: postTitle, author: postAuthor, description: postDescription, content: postContent })
        .then((response) => {
        console.log(response);
        navigate('/');
        })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        });
    };

    return (
    <div className="container">
        <Link style={{ width: "100%", display: 'flex', justifyContent: 'end' }} to="/">Back to home</Link>
        <h3 className="fronttitle">Edit {postTitle}</h3>
        <div className="bodyform">
        <div className="col-12">
            <form onSubmit={submitHandler}>
            <div className="form-group">
                <div className="column">
                <>
                    <label htmlFor="title">Post Title: </label>
                    <br></br>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                    {errors.title ? <p>{errors.title.message}</p> : null}
                </>
                <>
                    <label htmlFor="author">Author: </label>
                    <br></br>
                    <input
                        type="text"
                        id="author"
                        className="form-control"
                        value={postAuthor}
                        onChange={(e) => setPostAuthor(e.target.value)}
                    />
                    {errors.author ? <p>{errors.author.message}</p> : null}
                </>

                    <label htmlFor="description">Description: </label>
                    <br></br>
                    <textarea name="description" cols="40" rows="5"
                        type="textarea"
                        id="description"
                        className="form-control"
                        value={postDescription}
                        onChange={(e) => setPostDescription(e.target.value)}
                    />
                    {errors.description ? <p>{errors.description.message}</p> : null}


                    <label htmlFor="content">Content: </label>
                    <br></br>
                    <textarea
                        type="textarea"
                        cols="40" 
                        rows="25"
                        id="content"
                        className="form-control"
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    {errors.content ? <p>{errors.content.message}</p> : null}

                </div>
        </div>
        <span className="editPost">
                <button type="submit" className="btn btn-primary">EDIT POST</button>
        </span>
    </form>
        </div>
        </div>
    </div>
    );
};

export default EditPost;