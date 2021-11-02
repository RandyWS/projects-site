import React, { useState } from "react";
import TextEditor from "./TextEditor";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { _createPost } from "../../store";

const AddBlogPost = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  const submitPost = () => {
    const post = {
      title,
      subtitle,
      imageUrl: image,
      content,
      date: Date.now(),
    };
    dispatch(_createPost(post));
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Button
        onClick={() => {
          submitPost();
        }}
        variant="contained"
      >
        Submit Post
      </Button>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          label="Title"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Subtitle</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={subtitle}
          onChange={(ev) => setSubtitle(ev.target.value)}
          label="Subitle"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">ImageUrl</InputLabel>
        <OutlinedInput
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
      <TextEditor setContent={setContent} />
    </Box>
  );
};

export default AddBlogPost;
