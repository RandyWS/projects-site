import React, { useEffect, useState } from "react";
import moment from "moment";

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
import Avatar from "@material-ui/core/Avatar";

import { useDispatch, useSelector } from "react-redux";
import { _fetchPosts } from "../store";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
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
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BlogHome = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.posts);
  const [featPost, setFeatPost] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(_fetchPosts());
  }, []);

  useEffect(() => {
    setFeatPost({ ...allPosts[0] });
    setPosts([...allPosts.slice(1)]);
  }, [allPosts]);

  console.log("all posts", allPosts);
  console.log("posts", posts);
  console.log("feat post", featPost);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => {
            return (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={post.imageUrl}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
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
  );
};

export default BlogHome;

// import React, { useEffect, useState } from "react";

// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
// import Grid from "@mui/material/Grid";

// import { useDispatch, useSelector } from "react-redux";
// import { _fetchPosts } from "../store";

// const BlogHome = (props) => {
//   const dispatch = useDispatch();
//   const { allPosts } = useSelector((state) => state.posts);
//   const [featPost, setFeatPost] = useState({});
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     dispatch(_fetchPosts());
//   }, []);

//   useEffect(() => {
//     setFeatPost({ ...allPosts[0] });
//     setPosts([...allPosts.slice(1)]);
//   }, [allPosts]);

//   console.log("all posts", allPosts);
//   console.log("posts", posts);
//   console.log("feat post", featPost);

//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//       <Toolbar />
//       <Card className="home-card">
//         <CardMedia
//           component="img"
//           height="140"
//           image={featPost.imageUrl}
//           alt="article"
//         />
//         <CardMedia className="home-card-media" image={featPost.imageUrl} />
//         <CardContent className=".home-card-content">
//           <Typography
//             className=".home-card-heading"
//             variant={"h6"}
//             gutterBottom
//           >
//             {featPost.title}
//           </Typography>
//           <Typography className="home-card-subheading" variant={"caption"}>
//             {featPost.subtitle}
//           </Typography>
//         </CardContent>
//       </Card>
//       <Divider />
//       <Grid
//         container
//         spacing={2}
//         direction="row"
//         justify="flex-start"
//         alignItems="flex-start"
//       >
//         {posts.map((post) => {
//           return (
//             <Grid item xs={12} sm={6} md={3} key={post.id}>
//               <Card className="home-card">
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={post.imageUrl}
//                   alt="article"
//                 />
//                 <CardMedia className="home-card-media" image={post.imageUrl} />
//                 <CardContent className=".home-card-content">
//                   <Typography
//                     className=".home-card-heading"
//                     variant={"h6"}
//                     gutterBottom
//                   >
//                     {post.title}
//                   </Typography>
//                   <Typography
//                     className="home-card-subheading"
//                     variant={"caption"}
//                   >
//                     {post.subtitle}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default BlogHome;
