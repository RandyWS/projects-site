import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  LoggedInRoute,
  AdminRoute,
  GuestRoute,
} from "./components/ProtectedRoutes";
import { Login, Signup } from "./components/AuthForm";
import NotFound from "./components/NotFound";
import Landing from "./components/Landing";
import ProjectsHome from "./components/ProjectsHome";
import Nudge from "./components/projects/Nudge";
import Rapport from "./components/projects/Rapport";
import Portfolio from "./components/projects/Portfolio";
import AnimalConservancy from "./components/projects/AnimalConservancy";
import BachBlock from "./components/projects/BachBlock";
import InProgressHome from "./components/InProgressHome";
import AlgosNav from "./components/AlgosNav";
import BlogHome from "./components/BlogHome";
import BlogPost from "./components/BlogPost";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import AddBlogPost from "./components/loggedIn/AddBlogPost";

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
        <Route exact path="/projects/nudge" component={Nudge} />
        <Route exact path="/projects/portfolio" component={Portfolio} />
        <Route exact path="/projects/rapport" component={Rapport} />
        <Route
          exact
          path="/projects/animal-conservancy"
          component={AnimalConservancy}
        />
        <Route exact path="/projects/bach-block" component={BachBlock} />
        {/* <Route exact path="/ongoing" component={InProgressHome} /> */}
        {/* <Route exact path="/algos" component={AlgosNav} /> */}
        <Route exact path="/blog" component={BlogHome} />
        <LoggedInRoute
          isLoggedIn={loggedIn}
          exact
          path="/blog/add"
          component={AddBlogPost}
        />
        <LoggedInRoute
          isLoggedIn={loggedIn}
          exact
          path="/blog/edit/:postId"
          component={AddBlogPost}
        />
        <Route exact path="/blog/:postId" component={BlogPost} />

        <GuestRoute
          isLoggedIn={loggedIn}
          exact
          path="/login"
          component={Login}
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
