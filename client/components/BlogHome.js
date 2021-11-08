import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";

import { useDispatch, useSelector } from "react-redux";
import { _fetchPosts, me, _fetchCurrPost } from "../store";

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
    margin: "0 10px",
    alignItems: "center",
    justifyContent: "center",
  },
  featDate: {
    textAlign: "center",
  },

  card: {
    maxWidth: "100%",
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontFamily: "SF Pro Display",
    textAlign: "center",
  },
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
}));

const BlogHome = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { allPosts, currPost } = useSelector((state) => state.posts);
  const [featPost, setFeatPost] = useState({});
  const [posts, setPosts] = useState([]);
  const { loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(_fetchPosts());
  }, []);

  useEffect(() => {
    if (allPosts.length) {
      dispatch(_fetchCurrPost(allPosts[0].id));
      setPosts([...allPosts.slice(1)]);
    }
  }, [allPosts]);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg" direction="column">
          <Card className={classes.featCard}>
            {/* {loggedIn ? <Link to={`/blog/add`}>Add</Link> : null} */}
            <CardActionArea component={Link} to={`/blog/${currPost.id}`}>
              <CardMedia
                className={classes.featMedia}
                image={currPost.imageUrl}
                title="feat article image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
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
            </CardActionArea>
            <CardActions className={classes.featCardActions}>
              <Box ml={2}>
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
          <Typography variant="h3" className={classes.blogTitle}>
            Articles
          </Typography>
          <Divider />
          <Grid container spacing={3}>
            {posts.map((post) => {
              return (
                <Grid key={post.id} item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea component={Link} to={`/blog/${post.id}`}>
                      <CardMedia
                        className={classes.media}
                        image={post.imageUrl}
                        title="article image"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          className={classes.text}
                          component="h2"
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="p"
                          className={classes.text}
                        >
                          {post.subtitle}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Box ml={2}>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                          >
                            {moment(post.date).format("LL")}
                          </Typography>
                        </Box>
                      </Box>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Box my={4} className={classes.paginationContainer}></Box>
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

export default BlogHome;
