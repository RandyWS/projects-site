import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useDispatch, useSelector } from "react-redux";
import {
  _createAlgo,
  _fetchCurrAlgo,
  _fetchAlgoTypes,
  _editAlgo,
} from "../../store";

const AddOrEditAlgo = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [algoType, setAlgoType] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState({});
  const { currAlgo, algoTypes } = useSelector((state) => state.algos);

  useEffect(() => {
    if (props.match.params.algoId) {
      dispatch(_fetchCurrAlgo(props.match.params.algoId));
    }
  }, []);

  useEffect(() => {
    dispatch(_fetchAlgoTypes());
  }, []);

  useEffect(() => {
    if (algoTypes.length) {
      algoTypes.forEach((type) => {
        categories[type.id] = [...type.categories];
      });
    }
  }, [algoTypes]);

  useEffect(() => {
    if (currAlgo.id) {
      setTitle(currAlgo.title);
      setContent(currAlgo.content);
      setAlgoType(currAlgo.algoType);
      setCategory(currAlgo.category);
      window.localStorage.setItem("content", currAlgo.content);
    }
  }, [currAlgo.id]);

  const submitAlgo = () => {
    const algo = {
      title,
      content,
      categoryId: category,
    };

    window.localStorage.removeItem("content");
    dispatch(_createAlgo(algo));
    props.history.push("/algos");
  };

  const editAlgo = () => {
    const algo = {
      id: props.match.params.algoId,
      title,
      categoryId: category,
    };

    window.localStorage.removeItem("content");
    dispatch(_editAlgo(algo));
    props.history.push("/algos");
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {props.match.params.algoId ? (
        <Button
          onClick={() => {
            editAlgo();
          }}
          variant="contained"
        >
          Edit Algo
        </Button>
      ) : (
        <Button
          onClick={() => {
            submitAlgo();
          }}
          variant="contained"
        >
          Submit Algo
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

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Algo Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={algoType}
          onChange={(ev) => setAlgoType(ev.target.value)}
          label="Algo Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {algoTypes.map((type) => (
            <MenuItem key={type.id} value={type.id}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {algoType ? (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {categories[algoType].map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}

      <Typography variant="h5" component="div" gutterBottom>
        Raw html:
      </Typography>
      <TextEditor setContent={setContent} content={content} />
    </Box>
  );
};

export default AddOrEditAlgo;
