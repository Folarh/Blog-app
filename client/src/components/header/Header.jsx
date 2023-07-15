import React from "react";
import "./Header.css";
import Image from "../../assets/hero.png";

export default function Header() {
  return (
    <section className="header">
      <div className="header-image">
        <img src={Image} alt="header-image" />
      </div>
    </section>
  );
}
