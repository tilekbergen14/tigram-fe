import axios from "axios";
const Api = axios.create({ baseURL: process.env.REACT_APP_URL });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const getPosts = () => Api.get("/post/");
export const likePost = (postId) => Api.post("/post/like/", { postId });
export const createPost = (post) => Api.post("/post/", post);

export const signIn = (formData) => Api.post("/auth/signin/", formData);
export const googleAuth = (formData) => Api.post("/auth/google/", formData);
export const signUp = (formData) => Api.post("/auth/signup/", formData);

export const updateUser = (formData) => Api.post("/user/update/", formData);

export const addFriends = (id) => Api.get(`/user/friend/${id}`);
