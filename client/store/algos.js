import axios from "axios";
import history from "../history";
const regeneratorRuntime = require("regenerator-runtime");

const TOKEN = "token";

const SET_CURR_ALGO = "SET_CURR_ALGO";
const SET_ALL_ALGOS = "SET_ALL_ALGOS";
const SET_ALGO_TYPES = "SET_ALGO_TYPES";
const DELETE_ALGO = "DELETE_ALGO";
const EDIT_ALGO = "EDIT_ALGO";

export const setCurrAlgo = (algo) => {
  return {
    type: SET_CURR_ALGO,
    algo,
  };
};

export const setAllAlgos = (algos) => {
  return {
    type: SET_ALL_ALGOS,
    algos,
  };
};

export const setAlgoTypes = (algoTypes) => {
  return {
    type: SET_ALGO_TYPES,
    algoTypes,
  };
};

export const deleteAlgo = (algoId) => {
  return {
    type: DELETE_ALGO,
    algoId,
  };
};

export const editAlgo = (algo) => {
  return {
    type: EDIT_ALGO,
    algo,
  };
};

export const _fetchCurrAlgo = (id) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get(`/api/algos/${id}`, {
          headers: {
            authorization: token,
          },
        });

        if (data.id) {
          dispatch(setCurrAlgo(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _fetchAlgos = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get("/api/algos", {
          headers: {
            authorization: token,
          },
        });

        if (data.length) {
          dispatch(setAllAlgos(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _fetchAlgoTypes = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.get("/api/algos/algoTypes", {
          headers: {
            authorization: token,
          },
        });

        if (data.length) {
          dispatch(setAlgoTypes(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _createAlgo = (algo) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.post(`/api/algos`, algo, {
          headers: {
            authorization: token,
          },
        });

        if (data.id) {
          dispatch(setCurrAlgo(data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _deleteAlgo = (algoId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.delete(`/api/algos/${algoId}`, {
          headers: {
            authorization: token,
          },
        });

        if (data) {
          dispatch(deleteAlgo(algoId));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const _editAlgo = (algo) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);

      if (token) {
        const { data } = await axios.put(`/api/algos/${algo.id}`, algo, {
          headers: {
            authorization: token,
          },
        });

        if (data.length) {
          dispatch(editAlgo(data[1][0]));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = {
  currAlgo: {},
  allAlgos: [],
  algoTypes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURR_ALGO:
      return { ...state, currAlgo: action.algo };
    case SET_ALL_ALGOS:
      return { ...state, allAlgos: action.algos };
    case SET_ALGO_TYPES:
      return { ...state, algoTypes: action.algoTypes };
    case DELETE_ALGO:
      let deletedStateCopy = [...state.allAlgos];
      if (deletedStateCopy.length) {
        deletedStateCopy = deletedStateCopy.filter(
          (algo) => algo.id !== action.algoId
        );
      }
      return { ...state, allAlgos: deletedStateCopy };
    case EDIT_ALGO:
      let stateCopy = [...state.allAlgos];
      if (stateCopy.length) {
        stateCopy = stateCopy.map((algo) => {
          if (algo.id === action.algo.id) {
            algo = action.algo;
          }
          return algo;
        });
      }

      return { ...state, allAlgos: stateCopy };
    default:
      return state;
  }
}
