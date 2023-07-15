import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./SinglePost.css";

export default function SinglePost({ post }) {
  return (
    <div className="singlepost">
      {post.photo && <img src={post.photo} className="post-image" />}

      <div className="post-info">
        <div className="post-categories">
          {post.categories.map((cat) => {
            <span className="postCat">{cat.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="post-title">{post.title}</span>
        </Link>

        <hr />
        <span className="post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post-description">{post.desc}</p>
    </div>
  );
}
