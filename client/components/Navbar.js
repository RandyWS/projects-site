import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { logout, me } from "../store";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Randy Stopa
        </Typography>
        {!!auth.id ? (
          <div className={classes.navlinks}>
            <Link to="/home" className={classes.link}>
              Home
            </Link>
            <a href="#" className={classes.navlinks} onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className={classes.navlinks}>
            <Link to="/login" className={classes.link}>
              Login
            </Link>
            <Link to="/signup" className={classes.link}>
              Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

/**
 * CONTAINER
 */

export default Navbar;