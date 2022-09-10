import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
import moment from "moment";

const DisplayAll = () => {
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
    axios.get("http://localhost:8000/api/post")
        .then((response) => {
        console.log(response.data);
        setAllPosts(response.data);
        })
        .catch((err) => {
        console.log(err.response);
        });
    }, []);

    return (
    <div className="container">
        <div className="font-link">
        <div className="col-12">
            <h1 className="fronttitle">Welcome to the Architecture Aficionado Blog</h1>
            <h5 className="frontrtitle">Sit back, relax, and enjoy the stories our patrons have compiled for you!</h5>
            <Link style={{ width: "100%", display: 'flex', justifyContent: 'center', marginBottom: '30px' }} to="/posts/new">
                <button className="Create"> Add A New Post to the blog </button>
            </Link>
            <div className="body">
            <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="col">Blog Post</th>
                    <th scope="col">Written By</th>
                    <th scope="col">Date Added</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allPosts.map((post, index) => {
                return (
                    <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{moment(post.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                    <td className="links">
                        <Link to={`/posts/${post._id}`}>
                            <button className="Create"> View Blog Post </button>
                        </Link>
                        | 
                        <Link to={`/posts/${post._id}/edit`}>
                            <button className="Create"> Edit Blog Post </button>
                        </Link>
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    );
};

export default DisplayAll;