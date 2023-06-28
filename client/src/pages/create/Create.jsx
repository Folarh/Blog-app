import React from "react";
import "./Create.css";
import { GrAdd } from "react-icons/gr";
import image from "../../assets/hero.png";

export default function Create() {
  return (
    <main className="create">
      <div className="create-image-container">
        <img src={image} className="create-image" />
      </div>

      {/* ------FORM-CONTAINER-------- */}
      <form className="create-post">
        <div className="create-post-group">
          <label htmlFor="file">
            <GrAdd className="create-icon" />
          </label>
          <input type="file" id="file" />
          <input
            type="text"
            className="create-input"
            placeholder="Title"
            autoFocus="true"
          />
        </div>
        <div className="create-post-group">
          <textarea
            placeholder="Write Someting..."
            type="text"
            className="create-input create-text"
          ></textarea>
        </div>
        <button className="create-btn">Post</button>
      </form>
    </main>
  );
}
