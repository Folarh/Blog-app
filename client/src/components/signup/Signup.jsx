import { useState } from "react";

//react icon
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

//style
import "./Signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = () => {
    e.preventDefault();
    signup(user.email, user.password);
    // console.log(user.email, user.password);
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
    </div>
  );
};

export default Signup;
