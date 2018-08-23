import React, { Component } from "react";
import { Link } from "react-router-dom";
class LearCentCabinet extends Component {
  state = {
    menuCategory: ""
  };
  render() {
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
                      <Link to="/cabinet/addadv" className="active">
                        <i className="icon_document_alt" />
                        Add advertaisment
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
                asd
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default LearCentCabinet;
