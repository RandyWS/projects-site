import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

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

import { useDispatch, useSelector } from "react-redux";
import { _fetchCurrPost, _deletePost, me } from "../store";

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
    backgroundColor: "#f6bd60",
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

const BlogPost = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currPost } = useSelector((state) => state.posts);
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(_fetchCurrPost(props.match.params.postId));
  }, []);

  useEffect(() => {
    dispatch(me());
  }, []);

  if (!currPost.id) {
    return null;
  }

  const handleDelete = () => {
    dispatch(_deletePost(currPost.id));
    props.history.push("/blog");
  };

  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f7ede2" }}
      >
        <Toolbar />
        <Container maxWidth="lg" direction="column">
          <Card className={classes.featCard}>
            <CardContent>
              {loggedIn ? (
                <>
                  <Link
                    className={classes.authLink}
                    to={`/blog/edit/${currPost.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className={classes.authLink}
                    onClick={() => handleDelete()}
                  >
                    Delete
                  </button>
                </>
              ) : null}
              <Typography
                gutterBottom
                variant="h2"
                className={classes.featText}
                component="h2"
              >
                {currPost.title}
              </Typography>
              <Typography
                variant="h4"
                color="textSecondary"
                component="p"
                className={classes.featSubtitle}
              >
                {currPost.subtitle}
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.featMedia}
              image={currPost.imageUrl}
              title="feat article image"
            />

            <CardActions className={classes.featCardActions}>
              <Box>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: "center" }}
                  className={classes.featDate}
                >
                  {moment(currPost.date).format("LL")}
                </Typography>
              </Box>
            </CardActions>
          </Card>
        </Container>
        <Container
          maxWidth="lg"
          direction="column"
          className={classes.blogsContainer}
        >
          <Divider />
          <div
            className="modal-body"
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                JSON.parse(currPost.content),
                {
                  trigger: "#",
                  separator: " ",
                },
                true,
                (entity, text) => {
                  if (entity.type === "IMAGE") {
                    var textAlign = "none";
                    if (entity.data.alignment) {
                      //entity.data.alignment is for float using the LCR options on the image
                      //'none' means the user clicked center
                      if (entity.data.alignment === "none") {
                        textAlign = "center";
                      } else {
                        textAlign = entity.data.alignment;
                      }
                    }
                    return (
                      '<p style="text-align:' +
                      textAlign +
                      ';"><img src="' +
                      entity.data.src +
                      '" alt="' +
                      entity.data.alt +
                      '" style="height: ' +
                      entity.data.height +
                      ";width: " +
                      entity.data.width +
                      '"/></p>'
                    );
                  }
                }
              ),
            }}
          />
        </Container>
      </Box>

      <Box className={classes.hero}>
        <Box>
          <Typography
            gutterBottom
            variant="h3"
            className={classes.bottomText}
            component="h2"
          >
            Randy Stopa Blog
          </Typography>

          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            className={classes.bottomSubtitle}
          >
            Big thank you to Mika Matikainen for providing the figma template
            for this blog.
          </Typography>
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
        </Box>
      </Box>
    </>
  );
};

export default BlogPost;
