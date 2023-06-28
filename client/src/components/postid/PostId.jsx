import React from "react";
//styles
import "./PostId.css";
//image import
import image from "../../assets/hero.png";
//raect icons
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

export default function PostId() {
  return (
    <section className="postId">
      <div className="wrapper">
        <img src={image} className="postid-image" />
        <h1 className="postId-title">
          Lorem ipsum dolor sit amet consectetur
          <div className="edit-delete">
            <AiFillEdit className="post-icon-edit" />
            <AiTwotoneDelete className="post-icon-delete" />
          </div>
        </h1>
        <div className="post-info">
          <span className="post-author">
            Author: <b>Folarin</b>
          </span>
          <span className="post-date">1 hour ago</span>
        </div>
        <p className="post-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          perferendis explicabo odio, architecto eos est sint incidunt? Expedita
          ea eveniet atque aut voluptate cupiditate assumenda aperiam temporibus
          sunt, voluptas iusto. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis perferendis explicabo odio, architecto
          eos est sint incidunt? Expedita ea eveniet atque aut voluptate
          cupiditate assumenda aperiam temporibus sunt, voluptas iusto. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          perferendis explicabo odio, architecto eos est sint incidunt? Expedita
          ea eveniet atque aut voluptate cupiditate assumenda aperiam temporibus
          sunt, voluptas iusto. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis perferendis explicabo odio, architecto
          eos est sint incidunt? Expedita ea eveniet atque aut voluptate
          cupiditate assumenda aperiam temporibus sunt, voluptas iusto.
        </p>
      </div>
    </section>
  );
}
