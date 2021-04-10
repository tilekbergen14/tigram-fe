import { useEffect } from "react";
import { Container } from "@material-ui/core";
import Post from "../components/Post";
import UserComponent from "../components/User";
import Friends from "../components/Friends";
import Navbar from "../components/Navbar";
import { getPosts } from "../actions/posts";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Progress";

export default function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch({ type: "GET_AUTH" });
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <div className="home">
        <Navbar />
        <main>
          <div className="friends-component">
            <div className="user-component2">
              <UserComponent />
            </div>
            <Friends />
          </div>
          <div className="post-section">
            <p className="text500">Posts</p>
            <div className="posts">
              {posts.length === 0 ? (
                <div className="p-10">
                  <Spinner size={25} />
                </div>
              ) : (
                posts.map((post, index) => <Post post={post} key={index} />)
              )}
            </div>
          </div>
          <div className="user-component">
            <UserComponent />
          </div>
        </main>
      </div>
    </Container>
  );
}
