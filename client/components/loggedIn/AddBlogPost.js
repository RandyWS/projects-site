import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import { convertFromRaw } from "draft-js";

import { useDispatch, useSelector } from "react-redux";
import { _createPost, _fetchCurrPost, _editPost } from "../../store";

const AddBlogPost = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const { currPost } = useSelector((state) => state.posts);

  useEffect(() => {
    if (props.match.params.postId) {
      dispatch(_fetchCurrPost(props.match.params.postId));
    }
  }, []);
  console.log(currPost.content);
  useEffect(() => {
    if (currPost.id) {
      setTitle(currPost.title);
      setSubtitle(currPost.subtitle);
      setImage(currPost.imageUrl);
      setContent(currPost.content);
      window.localStorage.setItem("content", currPost.content);
    }
  }, [currPost.id]);

  const submitPost = () => {
    const post = {
      title,
      subtitle,
      imageUrl: image,
      content,
      date: Date.now(),
    };

    const content = window.localStorage.removeItem("content");
    dispatch(_createPost(post));
    props.history.push("/blog");
  };

  const editPost = () => {
    const post = {
      id: props.match.params.postId,
      title,
      subtitle,
      imageUrl: image,
      content,
    };
    console.log("post to edit", post);
    const content = window.localStorage.removeItem("content");
    dispatch(_editPost(post));
    props.history.push("/blog");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {props.match.params.postId ? (
        <Button
          onClick={() => {
            editPost();
          }}
          variant="contained"
        >
          Edit Post
        </Button>
      ) : (
        <Button
          onClick={() => {
            submitPost();
          }}
          variant="contained"
        >
          Submit Post
        </Button>
      )}
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-amount"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          label="Title"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Subtitle</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-amount"
          value={subtitle}
          onChange={(ev) => setSubtitle(ev.target.value)}
          label="Subitle"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">ImageUrl</InputLabel>
        <OutlinedInput
          required
          id="outlined-adornment-amount"
          value={subtitle}
          onChange={(ev) => setSubtitle(ev.target.value)}
          label="ImageUrl"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}
        />
      </FormControl>

      <Typography variant="h5" component="div" gutterBottom>
        Raw html:
      </Typography>
      <TextEditor setContent={setContent} content={content} />
    </Box>
  );
};

export default AddBlogPost;
