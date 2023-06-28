import React from "react";
import "./SinglePost.css";
import image from "../../assets/hero.png";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <img src={image} className="post-image" />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Aws</span>
          <span className="post-category">Azure</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consecteturimi.
        </span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus minus
        perferendis hic earum? Velit sapiente tenetur possimus autem consequatur
        consequuntur dolore, iusto est voluptatem! Rem ab quasi doloribus
        debitis possimus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Possimus minus perferendis hic earum? Velit sapiente tenetur
        possimus autem consequatur consequuntur dolore, iusto est voluptatem!
        Rem ab quasi doloribus debitis possimus!
      </p>
    </div>
  );
}
