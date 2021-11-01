import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

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
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
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
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
