import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";
import { Link } from "react-router-dom";
import RegisterUser from "./signUp/RegisterUser";
import RegisterRepetitor from "./signUp/RegisterRepetitor";
import RegisterLearCenter from "./signUp/RegisterLearCenter";
class SignUp extends Component {
  state = {
    category: "user"
  };
  render() {
    if (Meteor.userId()) {
      console.log(Meteor.user());
      this.props.history.push("/cabinet");
    } else {
      console.log("not user");
    }
    const showRegister = () => {
      if (this.state.category == "user") {
        return <RegisterUser context={this.props} />;
      } else if (this.state.category == "repetitor") {
        return <RegisterRepetitor context={this.props} />;
      } else if (this.state.category == "learning center") {
        return <RegisterLearCenter context={this.props} />;
      }
    };

    return (
      <React.Fragment>
        <div id="login">
          <aside style={{ position: "relative", margin: "40px auto" }}>
            <figure>
              <a href="index.html">
                <img
                  src="/img/logo_sticky.png"
                  width="155"
                  height="36"
                  data-retina="true"
                  alt=""
                  className="logo_sticky"
                />
              </a>
            </figure>
            <form autocomplete="off">
              <div className="form-group">
                <label>select category</label>
                <select
                  className="form-control"
                  type="email"
                  onChange={e => {
                    this.setState({
                      category: e.target.value
                    });
                  }}
                >
                  <option value="user">user</option>
                  <option value="repetitor">repetitor</option>
                  <option value="learning center">learning center</option>
                </select>
                {/* <i className="icon_mail_alt" /> */}
              </div>
              {showRegister()}
            </form>
            <div className="copy">© 2018 Panagea</div>
          </aside>
        </div>
      </React.Fragment>
    );
  }
}
export default SignUp;
