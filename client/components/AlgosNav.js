import React, { useState } from "react";
import { BrowserRouter, withRouter, Route, Switch } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import AlgosDrawer from "./AlgosDrawer";
import AlgosHome from "./AlgosHome";
import HashTables from "./algos/data-structures/HashTables";

const drawerWidth = 240;

const AlgosNav = (props) => {
  const path = props.match.path;

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <AlgosDrawer />
        <CssBaseline />

        <Switch>
          <Route exact path={path} component={AlgosHome} />
          <Route
            exact
            path={`${path}/data-structures/hash-tables`}
            component={HashTables}
          />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default withRouter(AlgosNav);
