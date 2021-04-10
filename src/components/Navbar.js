import Drawer from "./Drawer";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed-navbar">
      <div className="mobile-nav">
        <Link to="/home/">
          <h2 className="sm-logo mobile-logo cursorp">Tigram</h2>
        </Link>
        <div className="drawer">
          <Drawer menu={true} />
        </div>
      </div>
      <div className="nav">
        <Link to="/home/">
          <p className="sm-logo d-none-mobile cursorp">Tigram</p>
        </Link>
      </div>
    </header>
  );
}
