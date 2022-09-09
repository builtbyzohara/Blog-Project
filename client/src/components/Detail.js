import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";
import '../App.css';
import moment from "moment";


const Detail = (props) => {
    const [post, setPost] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`)
            .then( res => {
                console.log(res.data);
                setPost(res.data);
            })
            .catch( err => console.log(err) )
    }, [id]);

    const handleDeletePost = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/post/${idFromBelow}`)
            .then((response) => {
            console.log("success deleting post");
            console.log(response);
            const filteredPosts = allPosts.filter((pet) => {
                return post._id !== idFromBelow;
            });
            setAllPosts(filteredPosts);
            navigate("/");
            })
            .catch((err) => {
            console.log("Unable to delete post at this time.  Please try again", err.response);
            });
        };

    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
    axios
        .get("http://localhost:8000/api/post")
        .then((response) => {
        console.log(response.data);
        setAllPosts(response.data);
        })
        .catch((err) => {
        console.log(err.response);
        });
    }, []);
    return (
        <div className='container'>
            <Link style={{ width: "100%", display: 'flex', justifyContent: 'end' }} to="/">Back to home</Link>
            <span className='font-link' >
            <span> 
            <h1 className='title' style={{justifyContent: 'center', display: 'flex', marginTop: '28px' }} >{post.title}</h1>
            <h6 className='author' style={{justifyContent: 'center', display: 'flex'}}> Authored by {post.author} on {moment(post.createdAt).format('MMMM Do YYYY')}  </h6>
            <h5 className='description' style={{justifyContent: 'center', display: 'flex'}}>{post.description} </h5>
            </span>
            <hr/>
            <p>
            <td>{post.content}</td>
            </p>
            {/* <table className='detailtable'>

                <tr>
                    <th>Content:</th>
                    <td>{post.content}</td>
                </tr>
            </table> */}
            </span>
            <span className='deletePost'>
                <button
                    onClick={() => handleDeletePost(post._id)}
                    className="btn btn-danger">
                    Delete "{post.title}" post
                </button>
            </span>
        </div>
    )
}
export default Detail;