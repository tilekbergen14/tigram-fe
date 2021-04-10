const error = (error = null, action) => {
  switch (action.type) {
    case "AUTH_ERROR":
      return action.payload;
    default:
      return error;
  }
};

export default error;
