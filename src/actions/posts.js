import * as api from "../api";
import { GET_POSTS, CREATE_POST } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    await api.likePost(postId);
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (
  post,
  setPublishing,
  handleClose,
  setFile,
  setSuccess
) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    if (data) {
      setPublishing(false);
      handleClose();
      setFile(null);
      setSuccess(true);
    }
    dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
