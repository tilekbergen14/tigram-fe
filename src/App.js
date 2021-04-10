import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Auth from "./components/auth/auth";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home/" component={Home} />
        <Route path="/profile/" exact component={Profile} />
        <Route path="/profile/:userId" exact component={Profile} />
        <Route path="/auth/" component={Auth} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
