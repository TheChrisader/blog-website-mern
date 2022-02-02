import React from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
