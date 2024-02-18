import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header(props) {
  const { sections, title } = props;

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
        <Button size="large">GreenFood</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <Link
          color="inherit"
          noWrap
          variant="body2"
          href="/explore"
          sx={{ p: 1, flexShrink: 0 , textDecoration:"none", marginRight:"10px"}}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1, color:"#0d6efd" }}
          >
            Explore
          </Typography>
        </Link>

        <button type="button" class="btn btn-primary">
          Sign In
        </button>
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
