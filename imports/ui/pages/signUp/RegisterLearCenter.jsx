import React, { Component } from "react";

class RegisterLearCenter extends Component {
  state = {
    firstName: "",
    secondName: "",
    email: "",
    city: "",
    bin: "",
    learOfCat: "",
    companyName: "",
    phone: ""
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
            type: "learning center",
            bin: this.state.bin,
            learOfCat: this.state.learOfCat,
            companyName: this.state.companyName,
            phone: this.state.phone
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
          <label>first name of leadership</label>
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
          <label>second Name of leadership</label>
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
          <label>name of company</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                companyName: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>BIN</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                bin: e.target.value
              });
            }}
          />
          <i className="ti-user" />
        </div>
        <div className="form-group">
          <label>category of teaching</label>
          <input
            className="form-control"
            type="text"
            onChange={e => {
              this.setState({
                learOfCat: e.target.value
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
export default RegisterLearCenter;
