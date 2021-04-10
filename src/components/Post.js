import { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import moment from "moment";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import { likePost } from "../actions/posts";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Toast from "./Toast";

export default function Post({ post }) {
  const userId = JSON.parse(localStorage.getItem("profile"))?.result._id;
  const { imageUrl, title, createdAt, creatorId, _id } = post;
  const [likes, setLikes] = useState(post.likes);
  const [userLiked, setUserLiked] = useState(likes?.includes(userId));
  const [username, setUsername] = useState("|");
  const [userImage, setUserImage] = useState(null);
  const dispatch = useDispatch();
  const [openToase, setOpenToast] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_URL}/user/find/`,
          {
            id: creatorId,
          }
        );
        setUsername(result.data.username);
        setUserImage(result.data.imageUrl);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [creatorId]);

  const handleLike = () => {
    if (userLiked) {
      setLikes((likes) => likes.filter((like) => like !== userId));
      userId ? dispatch(likePost(_id)) : setOpenToast(true);
    } else {
      setLikes([...likes, userId]);
      userId ? dispatch(likePost(_id)) : setOpenToast(true);
    }
    setUserLiked((userLiked) => !userLiked);
  };
  return (
    <div className="post">
      {openToase && (
        <Toast
          message="Changes won't be saved! Sign up!"
          severity="warning"
          setOpenToast={setOpenToast}
        />
      )}
      {imageUrl && <img src={imageUrl} alt="post_image" className="image" />}
      <div className="post-info">
        <Link to={`/profile/${creatorId && creatorId}`}>
          <Avatar alt="profile" src={userImage && userImage} />
        </Link>
        <div className="inline-info">
          <Link to={`/profile/${creatorId && creatorId}`}>
            <p className="post-publisher cursorp">{username}</p>
          </Link>
          <p className="date">{moment(createdAt).fromNow()}</p>
          <h3 className="post-title">{title}</h3>
          <div className="likes">
            {userLiked ? (
              <FavoriteOutlinedIcon
                onClick={handleLike}
                className="cursorp"
                style={{ color: "red" }}
                fontSize="small"
              />
            ) : (
              <FavoriteBorderIcon
                onClick={handleLike}
                className="cursorp"
                style={{ color: "red" }}
                fontSize="small"
              />
            )}

            {likes && (
              <p className="like-text">
                {likes.length === 0 || likes.length === 1
                  ? likes.length + " like"
                  : likes.length + " likes"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
