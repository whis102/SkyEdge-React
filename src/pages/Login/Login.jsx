import React from "react";
import "./Login.scss";
import Checkbox from "@mui/material/Checkbox";
import TextInput from "../../components/TextInput/TextInput";
import LoginBtn from "../../components/LoginBtn/LoginBtn";

function Login() {
  return (
    <div className="container">
      <div className="login">
        <div className="login__brand">
          <img src="./favicon.png" width={"45px"} />
          <h1>SkyEdge</h1>
        </div>

        <div className="login__content">
          <div className="login__title">
            <h1>Welcome back!</h1>
            <p>Please enter your details</p>
          </div>

          <form action="">
            <TextInput
              id={"outlined-password-input"}
              label={"Email"}
              type={"text"}
            />

            <TextInput
              id={"outlined-password-input"}
              label={"Password"}
              type={"password"}
              autoComplete={"current-password"}
            />

            <div className="options">
              <div>
                <Checkbox defaultUnChecked size="small" />
                <label>Keep me logged in</label>
              </div>

              <a href="/forgot-password" className="forgot-password">
                Forgot password
              </a>
            </div>

            <LoginBtn children={"Login"} />
            <div className="signup-option">
              Don't have an account? <a href="/signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>

      <div className="login__image">
        <img src="assets/background.png" alt="Login Background" />
      </div>
    </div>
  );
}

export default Login;
