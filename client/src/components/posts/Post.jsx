import React from "react";
import "./Post.css";
import SinglePost from "../singlePost/SinglePost";

export default function Post() {
  return (
    <section className="post">
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </section>
  );
}
