import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * COMPONENT
 */
export const Home = (props) => {
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
      <div id="column">
        <div id="bio">
          <Paper className="bio-container">
            <Typography variant="h3" component="div" gutterBottom>
              Meet Randy
            </Typography>

            <div id="bio-info">
              <div className="bio-text">
                <div className="paragraph">
                  Hello I'm Randy Stopa, a software engineer currently based in
                  Boston. I originally studied politics and law at Oberlin
                  College, and used this knowledge to pursue a career as a
                  patent paralegal. While reviewing patent applications for
                  computer technologies, I realized I wanted a career where I
                  could participate creatively in this space.
                </div>
                <div className="paragraph">
                  When I started taking free JS courses over the pandemic, I
                  knew I had found what I was looking for. I love the creative
                  problem solving aspect of coding. After a 17-week immersive
                  coding bootcamp at the Grace Hopper Program at Fullstack
                  Academy, I am looking a job that links my professional
                  experience with my new engineering skills. My experience up
                  until this point has prepared me to be an empathetic,
                  organized, and driven engineer.
                </div>
                <div className="paragraph">
                  This site serves as my space to keep track of my completed
                  projects, practice algorithms, and keep notes on my current
                  projects.
                </div>
              </div>
              <div className="bio-img">
                <img src="/images/randy.jpeg" className="randy-img" />
              </div>
            </div>
            <div className="icons">
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
          </Paper>
        </div>

        <h1>FEATURED</h1>
        <div id="rounded-images-categories">
          <div className="rounded-images-categories">
            <img
              src="/images/array.jpeg"
              className="rounded-images-categories"
            />
            Arrays and Strings
          </div>
          <div className="rounded-images-categories">
            <img src="/images/node.png" className="rounded-images-categories" />
            Linked Lists
          </div>
        </div>
      </div>
    </Box>
  );
};

/**
 * CONTAINER
 */

export default Home;
