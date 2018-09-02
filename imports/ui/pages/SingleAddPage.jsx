import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { withTracker } from "meteor/react-meteor-data";
import { MainCollection } from "../../../api/MainCollection";
import { Link } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";

class SingleAddPage extends Component {
  state = {};
  componentWillMount() {
    // Meteor.call(
    //   "MainCollection.visit.update",
    //   this.props.location.pathname.split("/")[2],
    //   (err, result) => {
    //     if (!err) {
    //     } else {
    //       console.log(err);
    //     }
    //   }
    // );
  }
  render() {
    console.log(this.props);
    const lang = this.props.lang;
    const advTitle = this.props.adv.map(obj => obj.title);
    const advText = this.props.adv.map(obj => obj.description);
    // const visited = this.props.news.map(obj => obj.visited);
    // const createdAt = this.props.news.map(obj => obj.createdAt);
    const advImg = this.props.adv.map(obj => obj.coverImg);
    const category = this.props.adv.map(obj => obj.category);

    return (
      <React.Fragment>
        <main>
          <section className="hero_in tours_detail">
            <div className="wrapper">
              <div className="container">
                <h1 className="fadeInUp">
                  <span />
                  {advTitle}
                </h1>
              </div>
              <span className="magnific-gallery">
                <a
                  href="img/gallery/tour_list_1.jpg"
                  className="btn_photos"
                  title="Photo title"
                  data-effect="mfp-zoom-in"
                >
                  Посмотреть фотографии
                </a>
                <a
                  href="img/gallery/tour_list_2.jpg"
                  title="Photo title"
                  data-effect="mfp-zoom-in"
                />
                <a
                  href="img/gallery/tour_list_3.jpg"
                  title="Photo title"
                  data-effect="mfp-zoom-in"
                />
              </span>
            </div>
          </section>

          <div className="bg_color_1">
            <nav className="secondary_nav sticky_horizontal">
              <div className="container">
                <ul className="clearfix">
                  <li>
                    <a href="#description" className="active">
                      Описание
                    </a>
                  </li>
                  <li>
                    <a href="#reviews">Отзывы</a>
                  </li>
                  <li>
                    <a href="#sidebar">Бронирование</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container margin_60_35">
              <div className="row">
                <div className="col-lg-8">
                  <section id="description">
                    {advText}
                    <ul className="cbp_tmtimeline">
                      <li>
                        <time className="cbp_tmtime" dateTime="09:30">
                          <span>60 min.</span>
                          <span>09:30</span>
                        </time>
                        <div className="cbp_tmicon">1</div>
                        <div className="cbp_tmlabel">
                          <div className="hidden-xs">
                            <img
                              src="img/tour_plan_1.jpg"
                              alt=""
                              className="rounded-circle thumb_visit"
                            />
                          </div>
                          <h4>Interior of the cathedral</h4>
                          <p>
                            Vero consequat cotidieque ad eam. Ea duis errem qui,
                            impedit blandit sed eu. Ius diam vivendo ne.
                          </p>
                        </div>
                      </li>
                      <li>
                        <time className="cbp_tmtime" dateTime="11:30">
                          <span>60 min.</span>
                          <span>11:30</span>
                        </time>
                        <div className="cbp_tmicon">2</div>
                        <div className="cbp_tmlabel">
                          <div className="hidden-xs">
                            <img
                              src="img/tour_plan_2.jpg"
                              alt=""
                              className="rounded-circle thumb_visit"
                            />
                          </div>
                          <h4>Statue of Saint Reparata</h4>
                          <p>
                            Vero consequat cotidieque ad eam. Ea duis errem qui,
                            impedit blandit sed eu. Ius diam vivendo ne.
                          </p>
                        </div>
                      </li>
                      <li>
                        <time className="cbp_tmtime" dateTime="13:30">
                          <span>60 min.</span>
                          <span>13:30</span>
                        </time>
                        <div className="cbp_tmicon">3</div>
                        <div className="cbp_tmlabel">
                          <div className="hidden-xs">
                            <img
                              src="img/tour_plan_3.jpg"
                              alt=""
                              className="rounded-circle thumb_visit"
                            />
                          </div>
                          <h4>Huge clock decorated</h4>
                          <p>
                            Vero consequat cotidieque ad eam. Ea duis errem qui,
                            impedit blandit sed eu. Ius diam vivendo ne.
                          </p>
                        </div>
                      </li>
                      <li>
                        <time className="cbp_tmtime" dateTime="14:30">
                          <span>60 min.</span>
                          <span>14:30</span>
                        </time>
                        <div className="cbp_tmicon">4</div>
                        <div className="cbp_tmlabel">
                          <div className="hidden-xs">
                            <img
                              src="img/tour_plan_4.jpg"
                              alt=""
                              className="rounded-circle thumb_visit"
                            />
                          </div>
                          <h4>Vasari's fresco</h4>
                          <p>
                            Vero consequat cotidieque ad eam. Ea duis errem qui,
                            impedit blandit sed eu. Ius diam vivendo ne.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <hr />
                    <p>
                      Mea appareat omittantur eloquentiam ad, nam ei quas{" "}
                      <strong>oportere democritum</strong>. Prima causae admodum
                      id est, ei timeam inimicus sed. Sit an meis aliquam,
                      cetero inermis vel ut. An sit illum euismod facilisis,
                      tamquam vulputate pertinacia eum at.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul className="bullets">
                          <li>Dolorem mediocritatem</li>
                          <li>Mea appareat</li>
                          <li>Prima causae</li>
                          <li>Singulis indoctum</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="bullets">
                          <li>Timeam inimicus</li>
                          <li>Oportere democritum</li>
                          <li>Cetero inermis</li>
                          <li>Pertinacia eum</li>
                        </ul>
                      </div>
                    </div>

                    <hr />
                    <h3>Расположение</h3>
                    <div id="map" className="map map_single add_bottom_30" />
                  </section>

                  <section id="reviews">
                    <h2>Отзывы</h2>
                    <div className="reviews-container">
                      <div className="row">
                        <div className="col-lg-3">
                          <div id="review_summary">
                            <strong>8.5</strong>
                            <em>Превосходно</em>
                            <small>На основании 4 отзывов</small>
                          </div>
                        </div>
                        <div className="col-lg-9">
                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: " 90%" }}
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>5 звезд</strong>
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "95%" }}
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>4 звезды</strong>
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "60%" }}
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>3 звезды</strong>
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "20%" }}
                                  aria-valuenow="20"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>2 звезды</strong>
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-10 col-9">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: "0" }}
                                  aria-valuenow="0"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                />
                              </div>
                            </div>
                            <div className="col-lg-2 col-3">
                              <small>
                                <strong>1 звезда</strong>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                    <div className="reviews-container">
                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img src="img/avatar1.jpg" alt="" />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                          </div>
                          <div className="rev-info">
                            Admin – April 03, 2016:
                          </div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img src="img/avatar2.jpg" alt="" />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                          </div>
                          <div className="rev-info">
                            Ahsan – April 01, 2016:
                          </div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="review-box clearfix">
                        <figure className="rev-thumb">
                          <img src="img/avatar3.jpg" alt="" />
                        </figure>
                        <div className="rev-content">
                          <div className="rating">
                            <i className="icon-star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star voted" />
                            <i className="icon_star" />
                          </div>
                          <div className="rev-info">Sara – March 31, 2016:</div>
                          <div className="rev-text">
                            <p>
                              Sed eget turpis a pede tempor malesuada. Vivamus
                              quis mi at leo pulvinar hendrerit. Cum sociis
                              natoque penatibus et magnis dis
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <hr />

                  <div className="add-review">
                    <h5>Оставить отзыв</h5>
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Имя и фамилия *</label>
                          <input
                            type="text"
                            name="name_review"
                            id="name_review"
                            placeholder=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Эл. адрес *</label>
                          <input
                            type="email"
                            name="email_review"
                            id="email_review"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Рейтинг *</label>
                          <div className="custom-select-form">
                            <select
                              name="rating_review"
                              id="rating_review"
                              className="wide"
                            >
                              <option value="1">1 (низкая)</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5" selected>
                                5 (средняя)
                              </option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10 (высшая)</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-12">
                          <label>Ваш отзыв *</label>
                          <textarea
                            name="review_text"
                            id="review_text"
                            className="form-control"
                            style={{ height: "130px" }}
                          />
                        </div>
                        <div className="form-group col-md-12 add_top_20">
                          <input
                            type="submit"
                            value="Отправить"
                            className="btn_1"
                            id="submit-review"
                          />
                        </div>
                      </div>
                    </form>
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
export default withTracker(props => {
  Meteor.subscribe("MainCollection");
  return {
    adv: MainCollection.find({
      _id: props.location.pathname.split("/")[2]
    }).fetch()
  };
})(SingleAddPage);
