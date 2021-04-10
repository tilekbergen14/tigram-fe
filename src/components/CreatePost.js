import { useState } from "react";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Toast from "./Toast";
import Spinner from "./Progress";
import { createPost } from "../actions/posts";

export default function SimpleDialogDemo({ open, setOpen }) {
  const [data, setData] = useState({
    title: "",
    img: "",
  });
  const dispatch = useDispatch();
  const [publishing, setPublishing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  const publishPost = () => {
    try {
      setPublishing(true);
      dispatch(
        createPost(data, setPublishing, handleClose, setFile, setSuccess)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleFile = (e) => {
    const selected = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  return (
    <div>
      {success && (
        <Toast message="Your post uploaded succesfully!" severity="success" />
      )}
      <div className="create-post">
        <Dialog aria-labelledby="simple-dialog-title" open={open}>
          <div className="dialog">
            <DialogTitle id="simple-dialog-title">
              Create your new post!
            </DialogTitle>
            <div className="flex justify-between align-items">
              <input type="file" onChange={handleFile} />
              {file && (
                <Spinner
                  size="16px"
                  file={file}
                  data={data}
                  setData={setData}
                />
              )}
            </div>
            <TextField
              onChange={(e) => setData({ ...data, title: e.target.value })}
              placeholder="Title"
              variant="outlined"
              size="small"
              className="my-10"
            />
            <Button
              onClick={publishPost}
              variant="contained"
              color="primary"
              className="my-10 white"
            >
              {publishing ? "Publishing..." : "Publish"}
            </Button>
            <Button onClick={() => handleClose()}>Close</Button>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
