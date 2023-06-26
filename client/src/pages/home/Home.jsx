import React from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Post from "../../components/posts/Post";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <Post />
        <Sidebar />
      </main>
    </>
  );
}
