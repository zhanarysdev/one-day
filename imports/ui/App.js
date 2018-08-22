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
import AddAdvertaisment from "./pages/cabinet/AddAdvertaisment";
import AddMasterClass from "./pages/cabinet/AddMasterClass";
import AddSeminar from "./pages/cabinet/AddSeminar";
import AddTraining from "./pages/cabinet/AddTraining";
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

              <Route exact path="/register" component={SignUp} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/" component={Home} />
              <Route>
                <Cabinet>
                  <Route
                    exact
                    path="/cabinet/addTraining"
                    component={AddTraining}
                  />
                  <Route
                    exact
                    path="/cabinet/addSeminar"
                    component={AddSeminar}
                  />
                  <Route
                    exact
                    path="/cabinet/addMasterClass"
                    component={AddMasterClass}
                  />
                  <Route
                    exact
                    path="/cabinet/addadv"
                    component={AddAdvertaisment}
                  />
                  <Route path="/cabinet" component={Cabinet} />
                </Cabinet>
              </Route>
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
