import axios from "axios";
import history from "../history";
const regeneratorRuntime = require("regenerator-runtime");

const TOKEN = "token";

const SET_CURR_POST = "SET_CURR_POST";
const SET_ALL_POSTS = "SET_ALL_POSTS";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";

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

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
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

      if (token) {
        const { data } = await axios.post(`/api/posts`, post, {
          headers: {
            authorization: token,
          },
        });

        if (data.post.id) {
          dispatch(setCurrPost(data.post));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _deletePost = (postId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.delete(`/api/posts/${postId}`, {
          headers: {
            authorization: token,
          },
        });

        if (data) {
          dispatch(deletePost(postId));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _editPost = (post) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.put(`/api/posts/${post.id}`, post, {
          headers: {
            authorization: token,
          },
        });

        console.log("posts edited", data);
        if (data.length) {
          dispatch(editPost(data[1][0]));
        }
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
    case DELETE_POST:
      let deletedStateCopy = [...state.allPosts];
      if (deletedStateCopy.length) {
        deletedStateCopy = deletedStateCopy.filter(
          (post) => post.id !== action.postId
        );
      }
      return { ...state, allPosts: deletedStateCopy };
    case EDIT_POST:
      let stateCopy = [...state.allPosts];
      if (stateCopy.length) {
        stateCopy = stateCopy.map((post) => {
          if (post.id === action.post.id) {
            post = action.post;
          }
          return post;
        });
      }

      return { ...state, allPosts: stateCopy };
    default:
      return state;
  }
}
