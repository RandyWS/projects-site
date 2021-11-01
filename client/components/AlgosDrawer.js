import React, { useState } from "react";
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

const drawerWidth = 240;

const dataStructuresItems = [
  {
    id: 1,
    title: "Arrays and Strings",
    subtitles: [{ "hash-tables": "Hash Tables" }],
  },
];
// const dataStructuresItems = [
//   {
//     id: 1,
//     title: "Arrays and Strings",
//     subtitles: ["Hash Tables"],
//   },
//   {
//     id: 2,
//     title: "Linked Lists",
//     subtitles: ["Creating a Linked List", "Step Form", "Advanced Form"],
//   },
// ];

const AlgosDrawer = (props) => {
  const [open, setOpen] = React.useState({});

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
        <ListSubheader component="div">Data Structures</ListSubheader>
        {dataStructuresItems.map((postData) => {
          return (
            <div key={postData.id}>
              <ListItemButton onClick={() => handleClick(postData.id)}>
                <ListItemText>{postData.title}</ListItemText>
                {open[postData.id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open[postData.id]}>
                {postData.subtitles.map((subtitle, index) => {
                  return (
                    <List
                      key={index}
                      component={Link}
                      to={`/algos/data-structures/${Object.keys(subtitle)}`}
                      disablePadding
                    >
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText>{Object.values(subtitle)}</ListItemText>
                      </ListItemButton>
                    </List>
                  );
                })}
              </Collapse>
            </div>
          );
        })}
        <Divider />
      </Box>
    </Drawer>
  );
};

export default AlgosDrawer;

// import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";

// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListSubheader from "@mui/material/ListSubheader";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";

// import AlgosHome from "./AlgosHome";
// import ArraysAndStrings from "./algos/data-structures/ArraysAndStrings";

// const drawerWidth = 240;

// const dataStructuresItems = [
//   {
//     id: 1,
//     title: "Arrays and Strings",
//     subtitles: ["Hash Tables", "ArrayList & Resizeable Arrays"],
//   },
//   {
//     id: 2,
//     title: "Linked Lists",
//     subtitles: ["Creating a Linked List", "Step Form", "Advanced Form"],
//   },
// ];

// const AlgosDrawer = (props) => {
//   const [open, setOpen] = React.useState({});

//   function handleClick(id) {
//     setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
//   }

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto" }}>
//           <ListItemButton component="div" href="#simple-list">
//             <ListItemText primary="Home" />
//           </ListItemButton>
//           <ListSubheader component="div">Data Structures</ListSubheader>
//           {dataStructuresItems.map((postData) => {
//             return (
//               <div key={postData.id}>
//                 <ListItemButton onClick={() => handleClick(postData.id)}>
//                   <ListItemText>{postData.title}</ListItemText>
//                   {open[postData.id] ? <ExpandLess /> : <ExpandMore />}
//                 </ListItemButton>
//                 <Collapse in={open[postData.id]}>
//                   {postData.subtitles.map((subtitle, index) => {
//                     return (
//                       <List key={index} component="div" disablePadding>
//                         <ListItemButton sx={{ pl: 4 }}>
//                           <ListItemText>{subtitle}</ListItemText>
//                         </ListItemButton>
//                       </List>
//                     );
//                   })}
//                 </Collapse>
//               </div>
//             );
//           })}
//           <Divider />
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Link to={`${props.match.url}/data-structures/arrays-and-strings`}>
//           Example topic
//         </Link>
//         <Route
//           path="/algos/data-structures/arrays-and-strings"
//           component={ArraysAndStrings}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default AlgosDrawer;
