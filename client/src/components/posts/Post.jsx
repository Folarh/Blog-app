import React from "react";
import "./Post.css";
import SinglePost from "../singlePost/SinglePost";
import { useFetch } from "../../hooks/useFetch";

export default function Post() {
  const url = "/api/posts";
  const { data, error, loading } = useFetch(url);

  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      <section className="post">
        {data.map((post) => (
          <SinglePost post={post} key={post._id} />
        ))}
      </section>
    </>
  );
}
