import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    fontFamily: "New York Extra Large",
    textAlign: "center",
    color: "#fff",
  },

  hero: {
    backgroundImage: `url("/images/portfolio3.jpeg")`,
    height: "35vh",
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
  projectTitle: {
    fontWeight: 800,
    fontFamily: "New York Extra Large",
    textAlign: "center",
    color: "#ffffff",
  },

  projectSubtitle: {
    fontFamily: "SF Mono",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: 800,
  },

  projectCard: {
    height: "40vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 800,
    fontFamily: "Montserrat",
    textAlign: "center",
    color: "transparent",
    "&:hover": {
      filter: "grayscale(50%)",
    },

    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  project: {
    backgroundColor: "#d3d3d3",
    backgroundImage: "linear-gradient(315deg, #d3d3d3 0%, #7f8c8d 74%)",
    padding: 10,
    margin: 10,
    backdropFilter: "blur(10px)",
  },
  grid: {
    backgroundColor: "#d3d3d3",
    backgroundImage: "linear-gradient(315deg, #d3d3d3 0%, #7f8c8d 74%)",
  },

  bottom: {
    backgroundColor: "black",
    height: "25vh",
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
}));

const projects = [
  {
    title: "nudge",
    url: "nudge",
    css: "nudge",
    imageUrl: "/images/nudge.png",
    tagline:
      "Nudge is an ios optimized task manager, social media app, and geolocation based store-locator.",
    id: 1,
  },
  {
    title: "Rapport",
    url: "rapport",
    css: "rapport",
    imageUrl: "/images/portfolio3.jpeg",
    tagline:
      "Rapport is an ios optimized calendar app that helps you maintain contact with your friends.",
    id: 2,
  },
  {
    title: "Animal Conservancy",
    css: "conservancy",
    url: "animal-conservancy",
    imageUrl: "/images/portfolio3.jpeg",
    tagline:
      "The Animal Conservancy is an ecommerce store designed to connect zoos with animals with all proceeds going to conservation efforts.",
    id: 3,
  },
];

const ProjectsHome = (props) => {
  const classes = useStyles();
  const [show, setShow] = useState({});

  function handleMouseOver(id) {
    setShow((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  }

  return (
    <Box className={classes.grid}>
      <Toolbar />
      <Box className={classes.hero}>
        <Box>
          <Typography
            gutterBottom
            variant="h2"
            className={classes.title}
            component="h2"
          >
            PORTFOLIO
          </Typography>
        </Box>
      </Box>

      <Grid container>
        {projects.map((project) => {
          return (
            <Grid
              key={project.id}
              item
              xs={12}
              sm={6}
              md={4}
              onMouseOver={() => handleMouseOver(project.id)}
              onMouseOut={() => handleMouseOver(project.id)}
              onClick={() => props.history.push(`/projects/${project.url}`)}
            >
              <Box
                className={classes.projectCard}
                sx={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                {show[project.id] ? (
                  <Card className={classes.project}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      className={classes.projectTitle}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      className={classes.projectSubtitle}
                    >
                      {project.tagline}
                    </Typography>
                  </Card>
                ) : null}
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box className={classes.bottom}>
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            className={classes.bottomText}
            component="h4"
          >
            Randy Stopa
          </Typography>

          <div className={classes.navlinks} sx={{ p: 1 }}>
            <Link to="https://github.com/RandyWS" className={classes.link}>
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/randy-stopa"
              className={classes.link}
            >
              LinkedIn
            </Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsHome;
