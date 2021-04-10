import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import UserComponent from "../components/User";
import Friends from "../components/Friends";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import Progress from "../components/Progress";
import { updateUser } from "../actions/user";
import { useDispatch } from "react-redux";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { useParams } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { addFriends } from "../actions/user";
import Toast from "../components/Toast";

export default function Profile() {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"))?.result;
  const [profileUser, setProfileUser] = useState(null);
  const [data, setData] = useState(user);
  const [openToast, setOpenToast] = useState(false);
  const [file, setFile] = useState(null);
  const [bannerImg, setBannerImg] = useState(null);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const userResult = await axios.get(
        `${process.env.REACT_APP_URL}/user/find/${userId ? userId : user?._id}`
      );
      setProfileUser(userResult.data);
      if (userResult?.data.friends?.includes(user?._id)) setFriends(true);

      const result = await axios.get(
        `${process.env.REACT_APP_URL}/post/${userId ? userId : user?._id}`
      );
      setPosts(result.data);
    }
    fetchData();
    if (update) {
      dispatch(updateUser(data));
      setUpdate(false);
    }
  }, [dispatch, data, update, user?._id, userId]);

  const handleProfileImage = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Container>
      {openToast && (
        <Toast
          message="Your changes won't save!"
          severity="warning"
          setOpenToast={setOpenToast}
        />
      )}
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={handleProfileImage}
      />
      <input
        accept="image/*"
        id="contained-button-file-banner"
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={(e) => setBannerImg(e.target.files[0])}
      />
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
            <div className="posts">
              <div className="user-thumb">
                <div className="banner">
                  {userId === user?._id ||
                    (!userId &&
                      (bannerImg ? (
                        <div className="button-progress">
                          <Progress
                            file={bannerImg}
                            size="30px"
                            setData={setData}
                            data={data}
                            setBannerImg={setBannerImg}
                            setUpdate={setUpdate}
                          />
                        </div>
                      ) : (
                        <div className="banner-button">
                          <label htmlFor="contained-button-file-banner">
                            <AddAPhotoIcon className="banner-icon" />
                          </label>
                        </div>
                      )))}
                  {profileUser?.bannerImgUrl ? (
                    <img
                      src={profileUser.bannerImgUrl}
                      alt="banner"
                      className="banner-img"
                    />
                  ) : (
                    <div className="banner-img"></div>
                  )}
                  <div className="avatar">
                    {(userId === user?._id || !userId) && user ? (
                      <label htmlFor="contained-button-file">
                        <Avatar
                          style={{ height: 150, width: 150 }}
                          className="cursorp"
                          src={profileUser && profileUser.imageUrl}
                        />
                        <div className="change-avatar">
                          <AddAPhotoIcon className="change-avatar-icon" />
                        </div>
                      </label>
                    ) : (
                      <Avatar
                        style={{ height: 150, width: 150 }}
                        className="cursorp"
                        src={profileUser && profileUser.imageUrl}
                      />
                    )}
                    <div className="avatar">
                      {file && (
                        <Progress
                          file={file}
                          size="40px"
                          setData={setData}
                          data={data}
                          setFile={setFile}
                          setUpdate={setUpdate}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <p className="profile-name">{profileUser?.username}</p>
              <div className="profile-nav">
                <p className="text500 m-0">Posts</p>
                {userId !== user?._id && userId && (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ color: "white" }}
                    startIcon={!friends && <PersonAddIcon />}
                    onClick={() => {
                      setFriends((friends) => !friends);
                      user
                        ? dispatch(addFriends(profileUser._id))
                        : setOpenToast(true);
                    }}
                  >
                    {friends ? "Unfriend" : "Add friend"}
                  </Button>
                )}
              </div>
              {posts.map((post) => (
                <Post post={post} key={post._id} />
              ))}
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
