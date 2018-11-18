import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      const post = { id: new Date(), name: "Comment" };
      post.body = action.payload;
      console.log("Reducer Post:", post);
      const newState=[...state];
      return [post,...newState];
    case FETCH_COMMENTS:
      const comments = action.payload;
      return [...state, ...comments];
    default:
      return state;
  }
}
