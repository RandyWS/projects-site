import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { me, logout } from "../store";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "space-evenly",
    flexGrow: "3",
  },
  navcontainer: {
    display: "flex",
    flexGrow: "1",
  },

  logo: {
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <div className={classes.navcontainer}>
            <Typography noWrap variant="h4">
              Randy Stopa
            </Typography>

            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/projects" className={classes.link}>
                Projects
              </Link>
              <Link to="/ongoing" className={classes.link}>
                Ongoing
              </Link>
              <Link to="/algos" className={classes.link}>
                Algos
              </Link>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
              {loggedIn ? (
                <a href="#" onClick={handleClick} className={classes.link}>
                  Logout
                </a>
              ) : null}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
