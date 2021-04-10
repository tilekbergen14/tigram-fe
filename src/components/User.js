import { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemComp from "../components/Listitem";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import CreatePostComp from "./CreatePost";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Toast from "./Toast";
import Settings from "./Settings";

export default function User(props) {
  const user = JSON.parse(localStorage.getItem("profile"))?.result;
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOG_OUT" });
    history.push("/");
  };
  useEffect(() => {}, [user]);
  return (
    <div className="user-profile">
      <CreatePostComp open={open} setOpen={setOpen} />
      {openSettings && (
        <Settings open={openSettings} setOpen={setOpenSettings} />
      )}
      <div className="user-box">
        <List>
          <ListItem>
            <ListItemIcon>
              <Link to="/profile/">
                <Avatar
                  alt="profile"
                  className="cursorp"
                  src={user && user?.imageUrl}
                />
              </Link>
            </ListItemIcon>
            <ListItemText>
              <Link to="/profile/" className="cursorp black">
                {user
                  ? user?.username
                    ? user?.username
                    : user?.familyName + " " + user?.givenName
                  : "Test user"}
              </Link>
            </ListItemText>
          </ListItem>
          <Link to={`/profile/${user?._id}`} className="black">
            <ListItemComp text="Your posts" />
          </Link>
          <ListItem>
            <p
              onClick={() =>
                user ? setOpenSettings(true) : setOpenToast(true)
              }
              className="cursorp text500"
            >
              Settings
            </p>
          </ListItem>
          {openToast && (
            <Toast
              setOpenToast={setOpenToast}
              message="You should first sign in!"
              severity="error"
            />
          )}
          <ListItem>
            <div className="w-100">
              <Button
                onClick={() =>
                  user ? setOpen((open) => !open) : setOpenToast(true)
                }
                className="cursorp black w-100"
                variant="contained"
                color="primary"
                style={{ color: "#fff" }}
                startIcon={<AddCircleIcon className="cursorp" />}
              >
                Create post
              </Button>
              {user ? (
                <Button
                  onClick={logout}
                  variant="contained"
                  color="secondary"
                  className="btnt-10 w-100"
                >
                  Log out
                </Button>
              ) : (
                <Link to="/auth/">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "var(--green)", color: "white" }}
                    className="btnt-10 w-100"
                  >
                    Sign up
                  </Button>
                </Link>
              )}
            </div>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
