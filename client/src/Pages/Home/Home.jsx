import React from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Posts/Post";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <Post />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
