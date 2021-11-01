import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";
import { logout, me } from "../store";

const drawerWidth = 240;

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
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h4">Randy Stopa</Typography>
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
      {location.pathname.includes("algos") ? (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      ) : null}
    </Box>
  );
}

export default Navbar;
