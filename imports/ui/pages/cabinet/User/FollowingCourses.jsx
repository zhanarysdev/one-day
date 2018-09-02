import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { MainCollection } from "/api/MainCollection";
class FollowingCourses extends Component {
  state = {
    menuCategory: ""
  };
  render() {
    const adv = this.props.adv;
    const idis = Meteor.user() ? Meteor.user().profile.follows : "";
    const idCours = idis.map(id => id);
    console.log(idCours);
    // const showCont = () => {
    //   return adv.map(idAdv => idCours == idAdv);
    // };
    return (
      <React.Fragment>
        <main>
          <section className="hero_in general">
            <div className="wrapper">
              <div className="container">
                <h1 className="fadeInUp">
                  <span />
                  Faq Section
                </h1>
              </div>
            </div>
          </section>
          <div className="container margin_60_35">
            <div className="row">
              <aside className="col-lg-3" id="sidebar">
                <div className="box_style_cat" id="faq_box">
                  <ul id="cat_nav">
                    <li>
                      <Link to="/cabinet/followingCourses" className="active">
                        <i className="icon_document_alt" />
                        following courses
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#payment"
                        className="active"
                        onClick={e => {
                          e.preventDefault();
                          Accounts.logout((err, suc) => {
                            if (!err) {
                              this.props.history.push("/login");
                            }
                          });
                        }}
                      >
                        <i className="icon_document_alt" />
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="col-lg-9 addAdvertaisment" id="faq">
                {Meteor.user() ? Meteor.user().profile.follows : ""}
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("MainCollection");
  return {
    adv: MainCollection.find().fetch()
  };
})(FollowingCourses);
