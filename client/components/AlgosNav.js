import React, { useEffect, useState } from "react";
import { BrowserRouter, withRouter, Route, Switch } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { LoggedInRoute, AdminRoute, GuestRoute } from "./ProtectedRoutes";
import AlgosDrawer from "./AlgosDrawer";
import AlgosHome from "./AlgosHome";
import AlgoPost from "./AlgosHome";
import AddOrEditAlgo from "./loggedIn/AddOrEditAlgo";

import { me } from "../store";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;

const AlgosNav = (props) => {
  const path = props.match.path;
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <AlgosDrawer />
        <CssBaseline />

        <Switch>
          <Route exact path={path} component={AlgosHome} />

          <LoggedInRoute
            isLoggedIn={loggedIn}
            exact
            path="/algos/add"
            component={AddOrEditAlgo}
          />
          <LoggedInRoute
            isLoggedIn={loggedIn}
            exact
            path="/algos/edit/:algoId"
            component={AddOrEditAlgo}
          />
          <Route
            exact
            path="/algos/data-structures/:algoId"
            component={AlgoPost}
          />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default withRouter(AlgosNav);
