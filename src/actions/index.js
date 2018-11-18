import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";

export const saveComment = comment => {
  console.log('Action:',comment)
  return {
    type: SAVE_COMMENT,
    payload: comment.body
  };
};

export const fetchComments = response => {
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};
export const asyncFetchComments = () => {
  return dispatch =>
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then(res => {
        return res.data.slice(0, 5);
      })
      .then(res => {
        console.log(res);
        dispatch(fetchComments(res));
      });
};

export const changeAuth=(isLoggedIn)=> {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
