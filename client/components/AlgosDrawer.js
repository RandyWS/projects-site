import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useDispatch, useSelector } from "react-redux";
import { _fetchAlgos, _fetchAlgoTypes } from "../store";

const drawerWidth = 240;

const AlgosDrawer = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState({});
  const [drawer, setDrawer] = useState([]);
  const { allAlgos, algoTypes } = useSelector((state) => state.algos);

  useEffect(() => {
    dispatch(_fetchAlgos());
  }, []);

  useEffect(() => {
    dispatch(_fetchAlgoTypes());
  }, []);

  useEffect(() => {
    if (allAlgos.length && algoTypes.length) {
      let newDrawer = algoTypes.map((type) => {
        let currType = {
          id: type.id,
          name: type.name,
          url: type.url,
          categories: [],
        };
        currType.categories = type.categories.map((cat) => {
          let currCat = { ...cat, subtitles: [] };
          currCat.subtitles = allAlgos.filter((algo) => {
            if (algo.categoryId === currCat.id) {
              return algo;
            }
          });
          return currCat;
        });
        return currType;
      });

      setDrawer(newDrawer);
    }
  }, [allAlgos, algoTypes]);

  function handleClick(id) {
    setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  }

  return (
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
        <List component={Link} to={`/algos`} disablePadding>
          <ListItemButton component="div" href="/algos">
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>
        <Divider />
        {drawer.map((postData) => {
          return (
            <div key={postData.id}>
              <ListSubheader component="div">{postData.name}</ListSubheader>

              {postData.categories.map((cat) => {
                return (
                  <div key={cat.id}>
                    <ListItemButton onClick={() => handleClick(cat.id)}>
                      <ListItemText>{cat.name}</ListItemText>
                      {open[cat.id] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open[cat.id]}>
                      {cat.subtitles.map((subtitle) => {
                        return (
                          <List
                            key={subtitle.id}
                            component={Link}
                            to={`/algos/${postData.url}/${subtitle.id}`}
                            disablePadding
                          >
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText>{subtitle.title}</ListItemText>
                            </ListItemButton>
                          </List>
                        );
                      })}
                    </Collapse>
                  </div>
                );
              })}
            </div>
          );
        })}
        <Divider />
      </Box>
    </Drawer>
  );
};

export default AlgosDrawer;
