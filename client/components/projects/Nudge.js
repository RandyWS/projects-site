import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    fontFamily: "New York Extra Large",
  },
  featCard: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  featMedia: {
    height: "60vh",
  },
  featCardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },

  featText: {
    fontFamily: "New York Extra Large",
    textAlign: "center",
    fontWeight: 800,
  },
  featSubtitle: {
    fontFamily: "SF Mono",
    textAlign: "center",
  },
  featCardActions: {
    display: "flex",
  },
  featDate: {},

  hero: {
    backgroundColor: "black",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  bottomText: {
    fontFamily: "New York Extra Large",
    textAlign: "center",
    fontWeight: 800,
    color: "#fff",
  },
  bottomSubtitle: {
    fontFamily: "New York Small",
    textAlign: "center",
    color: "#fff",
  },
  navlinks: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  link: {
    color: "white",
    fontSize: "20px",
    padding: 10,
  },
  authLink: {
    fontSize: "20px",
    padding: 10,
  },
}));

const Nudge = (props) => {
  const classes = useStyles();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Container maxWidth="lg" direction="column">
        <Card className={classes.featCard}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              className={classes.featText}
              component="h2"
            >
              Nudge
            </Typography>
            <Typography
              variant="h4"
              color="textSecondary"
              component="p"
              className={classes.featSubtitle}
            >
              Nudge is an ios optimized task manager, social media app, and
              geolocation based store-locator.
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.featMedia}
            image="/images/nudge.png"
            title="nudge image"
          />
        </Card>
      </Container>
      <Container
        maxWidth="lg"
        direction="column"
        className={classes.blogsContainer}
      >
        <Divider />
      </Container>
    </Box>
  );
};

export default Nudge;
