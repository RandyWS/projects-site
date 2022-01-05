import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme) => ({
  featCard: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
    alignItems: "center",
    justifyContent: "center",
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
  github: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
  },
  demoCard: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
    alignItems: "center",
  },
  demoText: {
    fontFamily: "New York Small",
    fontWeight: 800,
  },
  playerContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontFamily: "SF Pro Display",
  },
  text: {
    fontFamily: "SF Pro Display",
    textAlign: "center",
  },
  card: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "15vh",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  navlinks: {
    alignItems: "baseline",
  },

  link: {
    fontSize: "20px",
    padding: 10,
  },
}));

const BachBlock = (props) => {
  const classes = useStyles();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3,  }}>
      <Toolbar />
      <Container maxWidth="lg" direction="column">
        <Card className={classes.featCard}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              className={classes.featText}
              component="h3"
            >
              Bach-Block
            </Typography>

            <Typography
              variant="h5"
              color="textSecondary"
              component="p"
              className={classes.featSubtitle}
            >
              Bach-Block is a Bachelor Franchise spoiler block Chrome extension
              written using JQuery.
            </Typography>
            <Box sx={{ fontStyle: "italic" }}>
              <Typography
                variant="h6"
                color="textSecondary"
                component="p"
                className={classes.featSubtitle}
              >
                November 7th, 2021 - November 12th, 2021
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <div className={classes.navlinks} sx={{ p: 1 }}>
          <GitHubIcon
            fontSize="large"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/RandyWS/bach-block";
            }}
          />
          <Link
            to={{
              pathname: "https://github.com/RandyWS/bach-block",
            }}
            target="_blank"
            className={classes.link}
          >
            GitHub
          </Link>
          <Link
            to={{
              pathname: "/blog/5",
            }}
            replace
            className={classes.link}
          >
            Blog Post
          </Link>
        </div>

        <Divider />
        <Card className={classes.demoCard}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.demoText}
              component="h5"
            >
              Description:
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.description}
              component="h5"
            >
              Bach-Block is a Chrome extension written using Javascript, JQuery,
              HTML5, and CSS. The extension uses JQuery to search the HTML on
              the active tab for references to the Bachelor Franchise, and blurs
              the container so the user is not spoiled for any episodes.
            </Typography>
          </CardContent>
        </Card>
        <Divider />

        <Card className={classes.demoCard}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.demoText}
              component="h5"
            >
              Built using:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/javascript.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Javascript
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/jQuery.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      JQuery
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/html.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      HTML5
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/css.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      CSS
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default BachBlock;
