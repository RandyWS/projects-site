import axios from "axios";
import history from "../history";
const regeneratorRuntime = require("regenerator-runtime");

const TOKEN = "token";

const SET_CURR_POST = "SET_CURR_POST";
const SET_ALL_POSTS = "SET_ALL_POSTS";

export const setCurrPost = (post) => {
  return {
    type: SET_CURR_POST,
    post,
  };
};

export const setAllPosts = (posts) => {
  return {
    type: SET_ALL_POSTS,
    posts,
  };
};

export const _fetchCurrPost = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get(`/api/posts/${id}`, {
          headers: {
            authorization: token,
          },
        });

        if (data.id) {
          dispatch(setCurrPost(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _fetchPosts = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get("/api/posts", {
          headers: {
            authorization: token,
          },
        });

        console.log("posts retrieved from fetch curr post", data);
        if (data.length) {
          dispatch(setAllPosts(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _createPost = (post) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      console.log("post to be created", post);

      if (token) {
        const { data } = await axios.post(`/api/posts`, post, {
          headers: {
            authorization: token,
          },
        });

        console.log("posts retrieved from create post", data);
        // if (data.post.id) {
        //   dispatch(setCurrPost(data.post));
        // }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  currPost: {},
  allPosts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURR_POST:
      return { ...state, currPost: action.post };
    case SET_ALL_POSTS:
      return { ...state, allPosts: action.posts };
    default:
      return state;
  }
}
