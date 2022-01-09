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
              variant="h3"
              className={classes.featText}
              component="h3"
            >
              Nudge
            </Typography>

            <Typography
              variant="h5"
              color="textSecondary"
              component="p"
              className={classes.featSubtitle}
            >
              Nudge is an iOS optimized task manager, social media app, and
              geolocation based store-locator.
            </Typography>
            <Box sx={{ fontStyle: "italic" }}>
              <Typography
                variant="h6"
                color="textSecondary"
                component="p"
                className={classes.featSubtitle}
              >
                October 5th, 2021 - October 29th, 2021
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <div className={classes.navlinks} sx={{ p: 1 }}>
          <GitHubIcon
            fontSize="large"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/2108capstone/nudge";
            }}
          />
          <Link
            to={{ pathname: "https://github.com/2108capstone/nudge" }}
            target="_blank"
            className={classes.link}
          >
            GitHub
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
              Nudge is an iOS mobile application that helps users complete their
              daily tasks; it provides a list of nearby places where users can
              purchase their items in order to complete their daily tasks. Users
              can add friends, join friend groups and chat, as well as create
              group tasks so they can help one another complete tasks on each of
              their lists. In addition, the user is able to send and receive
              notifications from friends, or nudge their friend(s) if they
              happen to be at a location that carries that item on their list.
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
              Demo:
            </Typography>
            <Box pt={1} className={classes.playerContainer}>
              <ReactPlayer url="https://youtu.be/v3s8yRj5zIQ" />
            </Box>
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
                    sx={{ backgroundImage: `url("/images/react-native.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      React Native
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/expo.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Expo
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/firebase.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Firebase
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/google-cloud.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Google APIs
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/redux.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Redux
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={2} md={2}>
                <Card className={classes.card}>
                  <Box
                    pt={1}
                    sx={{ backgroundImage: `url("/images/figma.png")` }}
                    className={classes.logo}
                  ></Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      className={classes.text}
                      component="h2"
                    >
                      Figma
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
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Nudge;
