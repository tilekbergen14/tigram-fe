import * as api from "../api";

export const signIn = (formData) => async (dispatch) => {
  try {
    const userData = await api.signIn(formData);
    dispatch({ type: "SIGN_IN", payload: userData.data });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR", payload: err.response.data });
  }
};
export const googleAuth = (data) => async (dispatch) => {
  try {
    const result = await api.googleAuth(data);
    dispatch({ type: "AUTH", payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (formData) => async (dispatch) => {
  try {
    const userData = await api.signUp(formData);
    dispatch({ type: "SIGN_UP", payload: userData.data });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR", payload: err.response.data });
  }
};
