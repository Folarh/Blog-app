import React from "react";
import "./PostParams.css";
import Sidebar from "../../components/sidebar/Sidebar";
import PostId from "../../components/postid/PostId";

export default function PostParams() {
  return (
    <main className="postparams">
      <PostId />
      <Sidebar />
    </main>
  );
}
