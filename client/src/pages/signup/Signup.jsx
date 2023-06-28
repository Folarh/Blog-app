import { useState } from "react";

//components
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";

//style
import "./SignUp.css";

const SignUp = () => {
  const [register, setRegister] = useState(true);

  return (
    <main className="reg">
      <div className="reg_img">
        <div>
          <h1>Blog</h1>
          <p>
            Unleash the Power of Words, Connect with Like-minded <br /> Readers
            and Writers
          </p>
        </div>
      </div>

      <div className="reg_form">
        <div className="reg_form_container">
          <div className="reg_btn">
            <button onClick={() => setRegister(true)}>REGISTER</button>
            <button onClick={() => setRegister(false)}>LOG IN</button>
          </div>

          <div className="reg_border_line">
            <p id={register ? "btn_active" : ""}></p>
            <p id={!register ? "btn_active" : ""}></p>
          </div>

          <div className="form">{register ? <Signup /> : <Login />}</div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
