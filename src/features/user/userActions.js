import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./userTypes";

const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.message });
      });
  };
};

export default fetchUsers;
