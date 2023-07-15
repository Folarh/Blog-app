import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Post from "../../components/posts/Post";

export default function Home() {
  return (
    <>
      <Header />
      <Post />
    </>
  );
}
