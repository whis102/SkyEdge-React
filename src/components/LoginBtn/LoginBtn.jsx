import PropTypes from "prop-types";
import "./LoginBtn.scss";
import Button from "@mui/material/Button";

function LoginBtn({ children }) {
  return (
    <div className="btn-box">
      <Button variant="contained" className="btn">
        {children}
      </Button>
    </div>
  );
}

LoginBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginBtn;
