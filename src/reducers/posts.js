import { CREATE_POST, GET_POSTS } from "../actions/types";

const posts = (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case CREATE_POST:
      return [action.payload, ...posts];
    default:
      return (posts = []);
  }
};

export default posts;
