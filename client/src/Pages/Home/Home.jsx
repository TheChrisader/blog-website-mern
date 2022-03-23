import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/${search}`);
      setPosts(res.data);
      console.log(search);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="home">
      <Header />
      <div className="container">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
