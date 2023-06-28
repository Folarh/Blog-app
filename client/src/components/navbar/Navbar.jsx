import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">Blog</h2>
      <ul className="navigation">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Create</li>
      </ul>
      <ul className="user-in">
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
    </nav>
  );
}
