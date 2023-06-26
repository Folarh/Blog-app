import React from "react";
import "./Sidebar.css";
import image from "../../assets/male2.png";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About me</span>
        <img src={image} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non
          sapiente modi nisi illo cupiditate iste sit cum ullam, numquam officia
          esse sint nihil quo voluptatem omnis rerum officiis quae!
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-items">Frontend developmemt</li>
          <li className="sidebar-list-items">Backend developmemt</li>
          <li className="sidebar-list-items">Mobile development</li>
          <li className="sidebar-list-items">Cloud Engineering</li>
          <li className="sidebar-list-items">Cyber security</li>
          <li className="sidebar-list-items">Data analysis</li>
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
  );
}
