import { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "@material-ui/core";
import Toast from "./Toast";
import { updateUser } from "../actions/user";
import { useDispatch } from "react-redux";

export default function SimpleDialogDemo({ open, setOpen }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile"))?.result
  );
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    dispatch(updateUser(user, setLoading, setFinished));
  };

  if (finished) {
    return <Toast message="Settings updated succesfully!" severity="success" />;
  }
  return (
    <div>
      <Dialog aria-labelledby="simple-dialog-title" open={open}>
        <div className="settings">
          <TextField
            label="Username"
            value={user.username}
            margin="dense"
            name="username"
            onChange={handleChange}
          />
          <TextField
            name="bio"
            label="Bio"
            rows="4"
            multiline={true}
            value={user?.bio}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            type="date"
            value={user?.birthday ? user.birthday : "2002-09-14"}
            onChange={handleChange}
            margin="dense"
            name="birthday"
            label="Birthday"
            placeholder=""
          />
          <Button
            variant="contained"
            color="primary"
            className="white my-10"
            onClick={handleSubmit}
            disabled={loading ? true : false}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleClose()}
          >
            Close
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
