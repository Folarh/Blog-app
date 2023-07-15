import React from "react";
import "./Sidebar.css";
import image from "../../assets/male2.png";
import { useFetch } from "../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";

export default function Sidebar() {
  const { search } = useParams();
  const { data: category, loading, error } = useFetch("/api/categories");
  console.log(category);
  return (
    <>
      {error && <div>{error}</div>}
      {loading && <div>loading...</div>}
      <section className="sidebar">
        <div className="sidebar-item">
          <span className="sidebar-title">About me</span>
          <img src={image} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non
            sapiente modi nisi illo cupiditate iste sit cum ullam, numquam
            officia esse sint nihil quo voluptatem omnis rerum officiis quae!
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">Categories</span>
          <ul className="sidebar-list">
            {category.map((cat) => (
              <Link to={`/?cat=${cat.name}`}>
                <li className="sidebar-list-items">{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">Follow us</span>
          <div className="sidebar-socials">
            <span>icon1</span>
            <span>icon2</span>
            <span>icon3</span>
            <span>icon4</span>
          </div>
        </div>
      </section>
    </>
  );
}
