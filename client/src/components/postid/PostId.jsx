import { useParams, Link } from "react-router-dom";
//styles
import "./PostId.css";

//raect icons
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

import { useFetch } from "../../hooks/useFetch";

export default function PostId() {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch("/api/posts/" + id);
  return (
    <section className="postId">
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <div className="wrapper">
        {post.image && <img src={post.photo} className="postid-image" />}
        <h1 className="postId-title">
          {post.title}
          <div className="edit-delete">
            <AiFillEdit className="post-icon-edit" />
            <AiTwotoneDelete className="post-icon-delete" />
          </div>
        </h1>
        <div className="post-info">
          <span className="post-author">
            Author:
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="post-date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="post-description">{post.desc}</p>
      </div>
    </section>
  );
}
