import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, Box } from "@mui/material";

import "./TopNav.scss";

export default function TopNav() {
  return (
    <Box className="top-nav">
      <Box className="info">
        <Link href="#" underline="none" color={"white"} className="info__link">
          <EmailIcon />
          <p>chicongnguyen.dev@gmail.com</p>
        </Link>

        <Link href="#" underline="none" color={"white"} className="info__link">
          <PhoneIcon />
          <p>0868936515</p>
        </Link>
      </Box>

      <Box className="social">
        <Link
          href="https://www.facebook.com/oc.voi.voii/"
          underline="none"
          color={"white"}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://github.com/whis102/SkyEdge"
          underline="none"
          color={"white"}
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.youtube.com/@zWhis155"
          underline="none"
          color={"white"}
        >
          <YouTubeIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/in/ocvoivoii/"
          underline="none"
          color={"white"}
        >
          <LinkedInIcon />
        </Link>
      </Box>
    </Box>
  );
}
