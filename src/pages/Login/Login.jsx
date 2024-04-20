import React from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextInput from "../../components/TextInput/TextInput";

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <div className="brand">
          <img src="./favicon.png" width={"50px"} />
          <h1>SkyEdge</h1>
        </div>


        <h1>Welcome back!</h1>
        <p>Please enter your details</p>

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
            <Checkbox defaultUnChecked size="small" />
            <label>Keep me logged in</label>
            <a href="/forgot-password" className="forgot-password">Forgot password</a>
          </div>

          <Button variant="contained">Login</Button>
          <div className="signup-option">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </form>
      </div>

      <div className="login-image">
        <img src="src/assets/background.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
