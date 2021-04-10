const authReducer = (authData = null, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return action?.payload;
    case "GET_AUTH":
      const userData = JSON.parse(localStorage.getItem("profile"));
      return userData;
    case "LOG_OUT":
      localStorage.clear();
      return null;
    case "SIGN_UP":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return action?.payload;
    case "UPDATE_USER":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return action?.payload;
    case "SIGN_IN":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return action?.payload;
    default:
      return authData;
  }
};

export default authReducer;
