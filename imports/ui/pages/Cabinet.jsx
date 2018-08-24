import React, { Component } from "react";
import LearCentCabinet from "./cabinet/LearCent/LearCentCabinet";
import { Link } from "react-router-dom";
import UserCabinet from "./cabinet/User/UserCabinet";
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

    const showContent = () => {
      if (user.profile.type == "learning center") {
        return <LearCentCabinet />;
      } else if (user.profile.type == "user") {
        return <UserCabinet />;
      } else {
      }
    };
    return this.props.loading ? <p>loading</p> : showContent();
  }
}

export default withTracker(() => {
  const loading = !Meteor.user();
  const user = Meteor.user();
  return { loading, user };
})(Cabinet);
