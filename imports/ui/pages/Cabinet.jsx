import React, { Component } from "react";
import LearCentCabinet from "./cabinet/LearCent/LearCentCabinet";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
class Cabinet extends Component {
  state = {
    menuCategory: ""
  };

  render() {
    if (!Meteor.userId()) {
      this.props.history.push("/login");
    }
    const user = this.props.user;
    console.log(user);
    const showContent = () => {
      if (user ? user.profile.type : "" == "learning center") {
        return <LearCentCabinet />;
      } else {
        console.log("somthing went wrong");
      }
    };
    return <React.Fragment>{showContent()}</React.Fragment>;
  }
}

export default withTracker(() => {
  return {
    user: Meteor.user()
  };
})(Cabinet);
