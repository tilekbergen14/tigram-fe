import { useState, useEffect } from "react";
import image from "./town.jpg";
import { TextField } from "@material-ui/core";
import "./auth.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Button } from "@material-ui/core";
import googleIcon from "./google-icon.svg";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp, googleAuth } from "../../actions/auth";
import Backdrop from "../Backdrop";

export default function Auth() {
  const [login, setLogin] = useState(false);
  let serverError = useSelector((state) => state.error);
  const [localError, setLocalError] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [visibility1, setVisibility1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
    if (serverError) {
      setLoading(false);
    }
  }, [serverError, localError, user, history]);

  const submitUser = () => {
    dispatch({ type: "AUTH_ERROR", payload: null });
    if (!login) {
      if (userdata.password === userdata.password2) {
        if (userdata.password.length > 4) {
          if (userdata.username.length) {
            setLoading(true);
            dispatch(signUp(userdata));
            setLocalError(null);
          } else {
            setLocalError("Username must be longer than 4 characters!");
          }
        } else {
          setLocalError("Password must be longer than 4 characters!");
        }
      } else {
        setLocalError("Passwords doesn't match each other!");
      }
    }
    if (login) {
      setLoading(true);
      dispatch(signIn(userdata));
    }
  };

  return (
    <div className="auth-page">
      {loading && <Backdrop />}
      <img src={image} alt="auth" className="auth-image" />
      <div className="auth-side">
        <Link to="/">
          <Button variant="outlined" color="primary" className="m-20">
            Back
          </Button>
        </Link>
        <div className="auth-part">
          <div className="mb-20">
            <div className="lock-badge">
              <LockIcon className="lock-icon" />
            </div>
            <p className="small-text">{login ? "Sign In" : "Sign Up"}</p>
          </div>
          <p className="error">{serverError}</p>
          <p className="error">{localError}</p>
          <div className="auth-inputs">
            <TextField
              required
              placeholder="Email"
              variant="outlined"
              size="small"
              fullWidth
              margin="dense"
              type="email"
              name="email"
              onChange={handleChange}
            />
            {!login && (
              <TextField
                required
                placeholder="Username"
                variant="outlined"
                size="small"
                fullWidth
                margin="dense"
                name="username"
                onChange={handleChange}
              />
            )}
            <TextField
              required
              name="password"
              onChange={handleChange}
              margin="dense"
              placeholder="Password"
              fullWidth
              variant="outlined"
              size="small"
              type={visibility ? "text" : "password"}
              InputProps={{
                endAdornment: !visibility ? (
                  <VisibilityOffIcon
                    className="cursorp"
                    onClick={() => setVisibility((visibility) => !visibility)}
                  />
                ) : (
                  <VisibilityIcon
                    className="cursorp"
                    onClick={() => setVisibility((visibility) => !visibility)}
                  />
                ),
              }}
            />
            {!login && (
              <TextField
                margin="dense"
                fullWidth
                placeholder="Repeat password"
                variant="outlined"
                size="small"
                type={visibility1 ? "text" : "password"}
                name="password2"
                onChange={handleChange}
                InputProps={{
                  endAdornment: !visibility1 ? (
                    <VisibilityOffIcon
                      className="cursorp"
                      onClick={() =>
                        setVisibility1((visibility1) => !visibility1)
                      }
                    />
                  ) : (
                    <VisibilityIcon
                      className="cursorp"
                      onClick={() =>
                        setVisibility1((visibility1) => !visibility1)
                      }
                    />
                  ),
                }}
              />
            )}
            <Button
              onClick={submitUser}
              variant="contained"
              color="primary"
              fullWidth
              className="my-10 white"
            >
              {login ? "Sign In" : "Sign Up"}
            </Button>

            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              cookiePolicy="single_host_origin"
              render={(renderprops) => (
                <Button
                  onClick={renderprops.onClick}
                  disabled={renderprops.disabled}
                  startIcon={
                    <img
                      src={googleIcon}
                      alt="google-icon"
                      className="google-icon"
                    />
                  }
                  variant="contained"
                  fullWidth
                >
                  Continue with google
                </Button>
              )}
              onSuccess={async (res) => {
                const result = res?.profileObj;
                const token = res?.tokenId;
                try {
                  dispatch(
                    googleAuth({
                      imageUrl: result?.imageUrl,
                      token,
                      username: result?.familyName + " " + result?.givenName,
                    })
                  );
                  history.push("/home/");
                } catch (err) {
                  console.log(err);
                }
              }}
              onFailure={(err) => console.log(err)}
            />
          </div>
        </div>
        <p onClick={() => setLogin((login) => !login)} className="auth-link">
          {login ? "Don't have an account?" : "Already have an account?"}
        </p>
      </div>
    </div>
  );
}
