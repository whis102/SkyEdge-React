import React from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextInput from "../../components/TextInput/TextInput";

function Login() {
  return (
    <div className="container">
      <div className="box box-input">
        <div className="brand">
          <img src="./favicon.png" width={"50px"} />
          <h1>SkyEdge</h1>
        </div>

        <div className="login-box">
          <h1>Welcome back!</h1>
          <p>Please enter your details</p>

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

          <Button variant="contained">Login</Button>

          <Checkbox defaultUnChecked size="small" />
        </div>
      </div>

      <div className="box">
        <img src="src/assets/background.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
