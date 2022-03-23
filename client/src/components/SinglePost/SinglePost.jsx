import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

import "./SinglePost.css";
import { Context } from "../../Context/Context";

const SinglePost = () => {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [updateMode, setUpdateMode] = useState(false);
  console.log(updateMode);

  const { user } = useContext(Context);

  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const PF = "http://localhost:8000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    fetchPost();
  }, [path]);

  const handleUpdate = async () => {
    const updatedPost = {
      username: user.username,
      title,
      desc,
    };
    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedPost.photo = filename;

        try {
          await axios.patch("/upload", data);
        } catch (err) {
          console.log(err);
        }
      }
      await axios.put(`/posts/${path}`, updatedPost);
      setUpdateMode(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        {((file && URL.createObjectURL(file)) || post.photo) && (
          <img
            className="single-post-img"
            src={(file && URL.createObjectURL(file)) || PF + post.photo}
            alt=""
          />
        )}
        {updateMode && (
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        )}
        {updateMode ? (
          <input
            type="text"
            className="single-post-title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="single-post-title">
            {post.title}
            {post.username === user?.username && (
              <div className="single-post-edit">
                <i
                  className="single-post-icon fa-solid fa-user-pen"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="single-post-icon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="single-post-info">
          {post.username && (
            <span>
              Author:
              <b className="single-post-author">
                <Link className="link" to={`/posts?user=${post.username}`}>
                  {post.username}
                </Link>
              </b>
            </span>
          )}
          <span>
            {post.updatedAt && new Date(post.updatedAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="single-post-desc-input"
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="single-post-desc">{post.desc}</p>
        )}
        {updateMode && (
          <button className="single-post-button" onClick={handleUpdate}>
            Update
          </button>
        )}
        {updateMode && (
          <button
            className="single-post-button"
            onClick={() => {
              setUpdateMode(false);
              setFile(null);
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
