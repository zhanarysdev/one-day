import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { MainCollection } from "../../../api/MainCollection";
import Slider from "./home/Slider";
class Home extends Component {
  render() {
    const showPopular = () => {
      return this.props.adv.map(item => {
        return (
          <div className="col-xl-3 col-lg-6 col-md-6">
            <a href="hotel-detail.html" className="grid_item">
              <figure>
                <div className="score">
                  <strong>8.9</strong>
                </div>
                <img src={item.img} className="img-fluid" alt="" />
                <div className="info">
                  <div className="cat_star">
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                    <i className="icon_star" />
                  </div>
                  <h3>{item.title}</h3>
                </div>
              </figure>
            </a>
          </div>
        );
      });
    };
    return (
      <React.Fragment>
        <main>
          <section className="hero_single version_2">
            <div className="wrapper">
              <div className="container">
                <h3>Book unique experiences</h3>
                <p>
                  Expolore top rated tours, hotels and restaurants around the
                  world
                </p>
                <form>
                  <div className="row no-gutters custom-search-input-2">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Hotel, City..."
                        />
                        <i className="icon_pin_alt" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="dates"
                          placeholder="When.."
                        />
                        <i className="icon_calendar" />
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="panel-dropdown">
                        <a href="#">
                          Guests
                          <span className="qtyTotal">1</span>
                        </a>
                        <div className="panel-dropdown-content">
                          <div className="qtyButtons">
                            <label>Adults</label>
                            <input type="text" name="qtyInput" value="1" />
                          </div>
                          <div className="qtyButtons">
                            <label>Childrens</label>
                            <input type="text" name="qtyInput" value="0" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <input
                        type="submit"
                        className="btn_search"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <div className="container-fluid margin_80_0">
            <div className="main_title_2">
              <span>
                <em />
              </span>
              <h2>Our Popular Tours</h2>
              <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
            </div>
            <div id="reccomended" className="owl-carousel owl-theme d-block">
              <Slider data={this.props.adv} />
            </div>

            <div className="container">
              <p className="btn_home_align">
                <a href="tours-grid-isotope.html" className="btn_1 rounded">
                  View all Tours
                </a>
              </p>
            </div>

            <hr className="large" />
          </div>

          <div className="container-fluid margin_30_95 pl-lg-5 pr-lg-5">
            <section className="add_bottom_45">
              <div className="main_title_3">
                <span>
                  <em />
                </span>
                <h2>Popular Hotels and Accommodations</h2>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row">{showPopular()}</div>

              <a href="hotels-grid-isotope.html">
                <strong>
                  View all (157)
                  <i className="arrow_carrot-right" />
                </strong>
              </a>
            </section>
          </div>

          <div className="bg_color_1">
            <div className="container margin_80_55">
              <div className="main_title_2">
                <span>
                  <em />
                </span>
                <h3>News and Events</h3>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <a className="box_news" href="#0">
                    <figure>
                      <img src="/img/news_home_1.jpg" alt="" />
                      <figcaption>
                        <strong>28</strong>
                        Dec
                      </figcaption>
                    </figure>
                    <ul>
                      <li>Mark Twain</li>
                      <li>20.11.2017</li>
                    </ul>
                    <h4>Pri oportere scribentur eu</h4>
                    <p>
                      Cu eum alia elit, usu in eius appareat, deleniti sapientem
                      honestatis eos ex. In ius esse ullum vidisse....
                    </p>
                  </a>
                </div>

                <div className="col-lg-6">
                  <a className="box_news" href="#0">
                    <figure>
                      <img src="/img/news_home_2.jpg" alt="" />
                      <figcaption>
                        <strong>28</strong>
                        Dec
                      </figcaption>
                    </figure>
                    <ul>
                      <li>Jhon Doe</li>
                      <li>20.11.2017</li>
                    </ul>
                    <h4>Duo eius postea suscipit ad</h4>
                    <p>
                      Cu eum alia elit, usu in eius appareat, deleniti sapientem
                      honestatis eos ex. In ius esse ullum vidisse....
                    </p>
                  </a>
                </div>

                <div className="col-lg-6">
                  <a className="box_news" href="#0">
                    <figure>
                      <img src="/img/news_home_3.jpg" alt="" />
                      <figcaption>
                        <strong>28</strong>
                        Dec
                      </figcaption>
                    </figure>
                    <ul>
                      <li>Luca Robinson</li>
                      <li>20.11.2017</li>
                    </ul>
                    <h4>Elitr mandamus cu has</h4>
                    <p>
                      Cu eum alia elit, usu in eius appareat, deleniti sapientem
                      honestatis eos ex. In ius esse ullum vidisse....
                    </p>
                  </a>
                </div>

                <div className="col-lg-6">
                  <a className="box_news" href="#0">
                    <figure>
                      <img src="/img/news_home_4.jpg" alt="" />
                      <figcaption>
                        <strong>28</strong>
                        Dec
                      </figcaption>
                    </figure>
                    <ul>
                      <li>Paula Rodrigez</li>
                      <li>20.11.2017</li>
                    </ul>
                    <h4>Id est adhuc ignota delenit</h4>
                    <p>
                      Cu eum alia elit, usu in eius appareat, deleniti sapientem
                      honestatis eos ex. In ius esse ullum vidisse....
                    </p>
                  </a>
                </div>
              </div>

              <p className="btn_home_align">
                <a href="blog.html" className="btn_1 rounded">
                  View all news
                </a>
              </p>
            </div>
          </div>

          <div className="call_section">
            <div className="container clearfix">
              <div
                className="col-lg-5 col-md-6 float-right wow"
                data-wow-offset="250"
              >
                <div className="block-reveal">
                  <div className="block-vertical" />
                  <div className="box_1">
                    <h3>Enjoy a GREAT travel with us</h3>
                    <p>
                      Ius cu tamquam persequeris, eu veniam apeirian platonem
                      qui, id aliquip voluptatibus pri. Ei mea primis ornatus
                      disputationi. Menandri erroribus cu per, duo solet congue
                      ut.
                    </p>
                    <a href="#0" className="btn_1 rounded">
                      Read more
                    </a>
                  </div>
                </div>
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
})(Home);
