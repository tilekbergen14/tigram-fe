import { useEffect } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Drawer from "../components/Drawer";
import Help from "../components/Help";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Landing() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    dispatch({ type: "GET_AUTH" });
    if (user) {
      history.push("/home/");
    }
  }, [dispatch, history]);

  return (
    <div className="landing">
      <header>
        <Drawer />
        <Help />
      </header>
      <div className="section">
        <div className="logo-section">
          <h1 className="logo">Tigram</h1>
          <div className="button-container">
            <Link to="/home/" className="w-100">
              <button className="button blue">Testing without sign up</button>
            </Link>
            <Link to="/auth" className="w-100">
              <button className="button green">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <p className="text500">Contact us</p>
        <div className="icons-box">
          <Link to="https://www.facebook.com/tilekbergen.muhamet/">
            <FacebookIcon className="icon" className="three-icon" />
          </Link>
          <Link to="https://www.instagram.com/ti_qu11/">
            <InstagramIcon className="icon" className="three-icon" />
          </Link>
          <Link to="https://wa.me/+77776842179">
            <WhatsAppIcon className="icon" className="three-icon" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
