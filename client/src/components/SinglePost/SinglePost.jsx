import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

import "./SinglePost.css";

const SinglePost = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
    };
    fetchPost();
  }, [path]);

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {post.photo && (
          <img className="single-post-img" src={post.photo} alt="" />
        )}
        <h1 className="single-post-title">
          {post.title}
          <div className="single-post-edit">
            <i className="single-post-icon fa-solid fa-user-pen"></i>
            <i className="single-post-icon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span>
            Author:
            <b className="single-post-author">
              <Link className="link" to={`/posts?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.updatedAt).toDateString()}</span>
        </div>
        <p className="single-post-desc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
