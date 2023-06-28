import React from "react";
import "./Settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import image from "../../assets/hero.png";
import { FaUserCircle } from "react-icons/fa";

export default function Settings() {
  return (
    <main className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update-title">Update</span>
          <span className="settings-delete-title">Delete</span>
        </div>
        <form className="settings-form">
          <label>Profile picture</label>
          <div className="settings-profile-picture">
            <img src={image} />
            <label htmlFor="fileInput">
              <FaUserCircle className="profile-pic-icon" />
            </label>
            <input type="file" id="fileInput" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Taiwo" />
          <label>Email</label>
          <input type="email" placeholder="Taiwo@coder.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-update">Update</button>
        </form>
      </div>
      <Sidebar />
    </main>
  );
}
