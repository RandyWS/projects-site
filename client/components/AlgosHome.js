import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { me } from "../store";

const AlgosHome = (props) => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {loggedIn ? <Link to={`/algos/add`}>Add</Link> : null}
      <div id="row">
        <Typography variant="h3" component="div" gutterBottom>
          Algos
        </Typography>
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="medium"
          data-theme="light"
          data-type="VERTICAL"
          data-vanity="randy-stopa"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://www.linkedin.com/in/randy-stopa?trk=profile-badge"
          ></a>
        </div>
      </div>

      <Paper className="algos-home-info">
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Hello!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to my algos practice page! This section serves primarily as a
          reference for myself when I'm reviewing algorithm problems. If you
          have any interesting algorithm problems you would like to share with
          me, please message them to me via my linkedIn above!
        </Typography>
        <Typography
          className="algos-heading"
          variant="h5"
          component="div"
          gutterBottom
        >
          Featured Algorithm Problems
        </Typography>
      </Paper>
    </Box>
  );
};

export default AlgosHome;
