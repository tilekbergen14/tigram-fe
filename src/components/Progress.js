import React, { useEffect } from "react";
import ImageUpload from "../firebase/fileUpload";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Progress({
  file,
  size,
  setData,
  data,
  setFile,
  setUpdate,
  setBannerImg,
}) {
  const { url } = ImageUpload(file);
  useEffect(() => {
    if (setBannerImg) {
      if (url) {
        setData({ ...data, bannerImgUrl: url });
        setUpdate(true);
        setBannerImg(null);
      }
    }
    if (url && !setBannerImg) {
      setData({ ...data, imageUrl: url });
      if (setUpdate) setUpdate(true);
    }
  }, [url, data, setData, setFile, setUpdate, setBannerImg]);
  return <CircularProgress size={size} />;
}
