import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/Home/home";
import Help from "./components/Help/help";
import Login from "./components/Login/login";
import SignUp from "./components/SignUo/signUp";

// import Login from "./components/signUpPage/signUp";
// import Testimonials from "./components/Testimonials/testimonials";
// import About from "./components/About/about";
import * as serviceWorker from "./serviceWorker";

const main = (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
    </Router>
  </div>
);

ReactDOM.render(main, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();