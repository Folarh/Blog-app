import { useState } from "react";

//style
import "./Login.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    e.preventDefault();
    login(user.email, user.password);
    console.log(user.email, user.password);
  };

  return (
    <div className="login">
      <h1>Welcome back</h1>

      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_form_input">
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

        <div className="login_form_input">
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

        <button className="login_form_btn">Log in</button>
      </form>
    </div>
  );
};

export default Login;
