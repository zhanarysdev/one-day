import React, { Component } from "react";

class RegisterUser extends Component {
  state = {
    firstName: "",
    secondName: "",
    email: "",
    city: "",
    age: "",
    profession: "",
    interCat: "",
    phone: "",
    expirience: "",
    linkToProfile: "",
    teachSubs: ""
  };
  render() {
    const registerUser = () => {
      Accounts.createUser(
        {
          email: this.state.userEmail,
          password: this.state.userPassword,
          profile: {
            firstName: this.state.userName,
            lastName: this.state.userLastName,
            city: this.state.userCity,
            type: "repetitor",
            age: this.state.age,
            profession: this.state.profession,
            interCat: this.state.interCat,
            phone: this.state.phone,
            expirience: this.state.expirience,
            linkToProfile: this.state.linkToProfile,
            teachSubs: this.state.teachSubs
          }
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            this.props.context.history.push("/cabinet");
          }
        }
      );
    };
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Your Name</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                firstName: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your Last Name</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                secondName: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your city</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                city: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your age</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                age: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your profession</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                profession: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your expirience</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                expirience: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your link to portfolio</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                linkToProfile: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your teaching subjects</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                teachSubs: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your interesting categoryes</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                interCat: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your contact number</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                phone: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input
            className="form-control"
            type="email"
            onChange={e => {
              this.setState({
                userEmail: e.target.value
              });
            }}
          />
          <i className="icon_mail_alt" />
        </div>
        <div className="form-group">
          <label>Your password</label>
          <input
            className="form-control"
            type="password"
            id="password1"
            onChange={e => {
              this.setState({
                userPassword: e.target.value
              });
            }}
          />
          <i className="icon_lock_alt" />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input className="form-control" type="password" id="password2" />
          <i className="icon_lock_alt" />
        </div>

        <div id="pass-info" className="clearfix" />
        <a
          href="#0"
          className="btn_1 rounded full-width add_top_30"
          onClick={e => {
            e.preventDefault();
            registerUser();
          }}
        >
          Register Now!
        </a>
        <div className="text-center add_top_10">
          Already have an acccount?{" "}
          <strong>
            <a href="login.html">Sign In</a>
          </strong>
        </div>
      </React.Fragment>
    );
  }
}
export default RegisterUser;
