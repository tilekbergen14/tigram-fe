import { useEffect, useState } from "react";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import ListComp from "./Listitem";
import axios from "axios";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer({ menu }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_URL}/user/getusers/`
        );
        setUsers(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [setUsers]);

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    if (menu) {
      return (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === "top" || anchor === "bottom",
          })}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar alt="profile" className="cursorp" />
              </ListItemIcon>
              <ListItemText>
                <p className="cursorp text">Tilekbergen</p>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListComp text="Profile" />
            <ListComp text="Friends" />
            <ListComp text="Settings" />
          </List>
        </div>
      );
    }
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
      >
        <List>
          <ListItem>
            <Link to="/home/" className="black">
              <p className="cursorp text500">Explore others posts</p>
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <p className="cursorp text500">Find new friends</p>
          </ListItem>
          {users.map((user) => (
            <ListItem key={user._id}>
              <ListItemIcon>
                <Avatar
                  alt="profile"
                  className="cursorp"
                  src={user && user.imageUrl}
                />
              </ListItemIcon>

              <ListItemText>
                <p className="cursorp text">{user.username}</p>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  const anchor = "left";
  toggleDrawer(anchor, true);
  return (
    <div>
      <MenuIcon onClick={toggleDrawer(anchor, true)} className="cursorp" />
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
