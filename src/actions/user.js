import * as api from "../api";
export const updateUser = (formData, setLoading, setFinished) => async (
  dispatch
) => {
  const result = await api.updateUser(formData);
  if (setLoading && result) {
    setLoading(false);
    setFinished(true);
  }
  dispatch({ type: "UPDATE_USER", payload: result.data });
};

export const addFriends = (id) => async () => {
  try {
    await api.addFriends(id);
  } catch (err) {
    console.log(err);
  }
};
