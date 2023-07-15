import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
//style
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { postData, data, error } = useFetch("/api/auth/login", "POST");
  const { user, dispatch, isFetching } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // const res = await axios.post("/api/auth/login", {
      //   email: userRef.current.value,
      //   password: passwordRef.current.value,
      // });
      postData({
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);

  return (
    <div className="login">
      <h1>Welcome back</h1>

      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login_form_input">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gamil.com"
            ref={userRef}
            autoComplete="off"
          />
        </div>

        <div className="login_form_input">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="********"
            ref={passwordRef}
            autoComplete="off"
          />
        </div>

        <button className="login_form_btn" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
