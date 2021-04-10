import { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemComp from "../components/Listitem";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "./Progress";

export default function Friends() {
  const [users, setUsers] = useState([]);
  const localUser = JSON.parse(localStorage.getItem("profile"))?.result;
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_URL}/user/getusers/`
        );
        setUsers(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="left-box">
      <div className="users">
        <List>
          <ListItemComp text="You might know" />
          {users.length !== 0 ? (
            users.map(
              (user) =>
                user._id !== localUser?._id && (
                  <ListItem key={user._id}>
                    <Link to={`/profile/${user._id}`}>
                      <ListItemIcon>
                        <Avatar
                          alt="profile"
                          className="cursorp"
                          src={user?.imageUrl}
                        />
                      </ListItemIcon>
                    </Link>

                    <ListItemText>
                      <Link to={`/profile/${user._id}`}>
                        <p className="cursorp text black">{user?.username}</p>
                      </Link>
                    </ListItemText>
                  </ListItem>
                )
            )
          ) : (
            <div className="p-10">
              <Spinner size={20} />
            </div>
          )}
        </List>
      </div>
    </div>
  );
}
