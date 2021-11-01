import React from "react";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const HashTables = (props) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Typography variant="h4" component="div" gutterBottom>
        Hash Tables
      </Typography>
      <Paper className="algos-home-info">
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Problem
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Approach
        </Typography>
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Code
        </Typography>
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Space and Time Complexity
        </Typography>

        <Typography variant="h6" component="div" gutterBottom>
          Space:
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          Time:
        </Typography>
      </Paper>
    </Box>
  );
};

export default HashTables;
