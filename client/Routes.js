import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  LoggedInRoute,
  AdminRoute,
  GuestRoute,
} from "./components/ProtectedRoutes";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";
import ProjectsHome from "./components/ProjectsHome";
import InProgressHome from "./components/InProgressHome";
import AlgosNav from "./components/AlgosNav";
import BlogHome from "./components/BlogHome";
import { me } from "./store";

/**
 * COMPONENT
 */
const Routes = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  if (loggedIn === undefined) {
    return null;
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={ProjectsHome} />
        <Route exact path="/ongoing" component={InProgressHome} />
        <Route exact path="/algos" component={AlgosNav} />
        <Route exact path="/blog" component={BlogHome} />
        <GuestRoute
          isLoggedIn={loggedIn}
          exact
          path="/login"
          component={Login}
        />
        <GuestRoute
          isLoggedIn={loggedIn}
          exact
          path="/signup"
          component={Signup}
        />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};

/**
 * CONTAINER
 */

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes);
