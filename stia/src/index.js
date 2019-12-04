import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.scss";
import Home from "./components/Home/home";
import Help from "./components/Help/help";
import Request from "./components/requestReason/requestReason";
import FormPage from "./components/requestForm/requestForm";
import Login from "./components/Login/login";
import SignUp from "./components/SignUo/signUp";
import signedIn from "./components/signedIn/signedIn";
import Testimonials from "./components/testimonials/testimonials";
import About from "./components/About/about";
import * as serviceWorker from "./serviceWorker";

const main = (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/help" component={Help} />
        <Route exact path="/requestReason" component={Request} />
        <Route exact path="/requestForm" component={FormPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signedIn" component={signedIn} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  </>
);

ReactDOM.render(main, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
