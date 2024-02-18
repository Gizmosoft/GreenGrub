import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();
  const [user, setuser] = useState(null);
  // setuser(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  function toggleDropdown() {
    const userName = document.querySelector(".logout-dropdown");
    userName.classList.toggle("open");
  }
  function logoutUser() {
    localStorage.removeItem("user");

    navigate("/signin");
  }
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
          backgroundColor: "#f5f5f5", // Relatively gray background color
          // height: 90
        }}
      >
        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/"
          sx={{ p: 1, flex: 1, textDecoration: "none", marginRight: "10px" }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            align="left"
            noWrap
            sx={{ color: "green" }}
          >
            GREENGRUB
          </Typography>
        </Link>

        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/explore"
          sx={{ p: 1, textDecoration: "none", marginRight: "10px" }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            sx={{ color: "#0d6efd" }}
          >
            Explore
          </Typography>
        </Link>

        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/recipe-calculator"
          sx={{ p: 1, textDecoration: "none", marginRight: "10px" }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            sx={{ color: "#0d6efd" }}
          >
            Calculate
          </Typography>
        </Link>
        {user != undefined ? (
          <div className="user-first-name" onClick={() => toggleDropdown()}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              align="center"
              noWrap
              sx={{ color: "green" }}
            >
              {user.firstName}
            </Typography>
            <div className="logout-dropdown" onClick={() => logoutUser()}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              align="center"
              noWrap
              sx={{ color: "white" }}
            >
              Logout
            </Typography>
              
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/signin")}
            class="btn btn-primary"
          >
            Sign In
          </button>
        )}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
