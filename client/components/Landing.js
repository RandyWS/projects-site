import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#f6bd60",
    height: "300px",
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
  },

  link: {
    color: "white",
    fontSize: "20px",
    paddingLeft: 10,
    paddingRight: 10,
  },
}));

export const Home = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f7ede2" }}
      >
        <Toolbar />
        <Typography variant="h3" component="div" gutterBottom>
          Meet Randy
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={7} md={8}>
            <Box
              m={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 2,
                alignContent: "space-between",
              }}
            >
              <Box pt={1} m={1}>
                <Typography
                  component="div"
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                  }}
                >
                  Hello I'm Randy Stopa, a software engineer currently based in
                  Boston. I originally studied politics and law at Oberlin
                  College, and used this knowledge to pursue a career as a
                  patent paralegal. While reviewing patent applications for
                  computer technologies, I realized I wanted a career where I
                  could participate creatively in this space.
                </Typography>
              </Box>
              <Box pt={1} m={1}>
                <Typography
                  component="div"
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                  }}
                >
                  When I started taking free JS courses over the pandemic, I
                  knew I had found what I was looking for. I love the creative
                  problem solving aspect of coding. After a 17-week immersive
                  coding bootcamp at the Grace Hopper Program at Fullstack
                  Academy, I am looking a job that links my professional
                  experience with my new engineering skills. My experience up
                  until this point has prepared me to be an empathetic,
                  organized, and driven engineer.
                </Typography>
              </Box>
              <Box pt={1} m={1}>
                <Typography
                  component="div"
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                  }}
                >
                  This site serves as a portfolio and a tech blog for my current
                  projects.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5} md={4}>
            <Box pt={1}>
              <CardMedia
                component="img"
                sx={{ height: "100%", width: "100%", borderRadius: "10%" }}
                image="/images/randy.jpeg"
                alt="Randy"
              />
            </Box>
            <Box
              pt={1}
              sx={{
                display: "flex",
              }}
            >
              <div style={{ marginLeft: "auto" }}>
                <LinkedInIcon
                  fontSize="large"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/in/randy-stopa";
                  }}
                />
                <GitHubIcon
                  fontSize="large"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/RandyWS";
                  }}
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.hero}>
        <Box>
          <div className={classes.navlinks} sx={{ p: 3 }}>
            <Link
              to={{ pathname: "https://github.com/RandyWS" }}
              target="_blank"
              className={classes.link}
            >
              GitHub
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/randy-stopa" }}
              target="_blank"
              className={classes.link}
            >
              LinkedIn
            </Link>
          </div>
          <Typography variant="h5" component="p" className={classes.link}>
            miranda.stopa@gmail.com
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
