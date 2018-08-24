import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cabinet from "./pages/Cabinet";
import SingleAddPage from "./pages/SingleAddPage";
import AddAdvertaisment from "./pages/cabinet/LearCent/AddAdvertaisment";
import AddMasterClass from "./pages/cabinet/LearCent/AddMasterClass";
import AddSeminar from "./pages/cabinet/LearCent/AddSeminar";
import AddTraining from "./pages/cabinet/LearCent/AddTraining";
import FollowingCourses from "./pages/cabinet/User/FollowingCourses";
// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div id="page">
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/advPage/:id" component={SingleAddPage} />
              <Route
                exact
                path="/cabinet/followingCourses"
                component={FollowingCourses}
              />
              <Route
                exact
                path="/cabinet/addTraining"
                component={AddTraining}
              />
              <Route exact path="/cabinet/addSeminar" component={AddSeminar} />
              <Route
                exact
                path="/cabinet/addMasterClass"
                component={AddMasterClass}
              />
              <Route
                exact
                path="/cabinet/addAdv"
                component={AddAdvertaisment}
              />
              <Route path="/cabinet" component={Cabinet} />

              <Route exact path="/register" component={SignUp} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
