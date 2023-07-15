import { useState } from "react";

//react icon
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

//style
import "./Signup.css";

const Signup = () => {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await axios.post("/api/auth/register", user);
      console.log(res);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <h1>SIgnup and create Content</h1>

      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_form_input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter a Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}
            autoComplete="off"
          />
        </div>

        <div className="register_form_input">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gamil.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            autoComplete="off"
          />
        </div>

        <div className="register_form_input">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="********"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            autoComplete="off"
          />
        </div>

        <div className="register_form_btn">
          <button className="btn_one">Create account</button>
          <button className="btn_two">
            <FcGoogle />
            Sign up with google
          </button>
          <button className="btn_three">
            <FaLinkedin className="linkedin" />
            Sign up with LinkendIn
          </button>
        </div>
      </form>
      {error && (
        <span style={{ color: "crimson", marginTop: "10px" }}>
          Something went wrong.
        </span>
      )}
    </div>
  );
};

export default Signup;
