import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h2 className="logo">Blog</h2>
      <ul className="navigation">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
        <li>WRITE</li>
      </ul>
      <ul className="user-in">
        <li>LOGIN</li>
        <li>REGISTER</li>
      </ul>
    </nav>
  );
}
