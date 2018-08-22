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
    const advText = this.props.adv.map(obj => obj.text);
    // const visited = this.props.news.map(obj => obj.visited);
    // const createdAt = this.props.news.map(obj => obj.createdAt);
    const advImg = this.props.adv.map(obj => obj.coverImg);
    const category = this.props.adv.map(obj => obj.category);

    return (
      <React.Fragment>
        <div className="single-news my-5">
          <div className="container">
            <div className="news-header card">
              <img
                src={advImg}
                alt=""
                className="card-img"
                style={{
                  maxWidth: "1368px",
                  filter: "brightness(75%)"
                }}
              />
              <div className="card-img-overlay">
                <a href="" className="home btn d-block">
                  {category}
                </a>

                <h1>{advTitle}</h1>
                <div className="controls">
                  <FacebookShareButton
                    url={window.location.href}
                    className="facebook btn"
                  >
                    <i className="fab fa-facebook-f" />
                    SHARE
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    className="tweetter btn"
                  >
                    <i className="fab fa-twitter" />
                    TWEET
                  </TwitterShareButton>
                </div>
              </div>
            </div>

            <article className="my-5">
              <div className="news-date">
                <ul className="my-5">
                  <li>
                    <i className="far fa-clock" />
                    {/* {createdAt} */}
                  </li>
                  <li>
                    <i className="fas fa-eye" />
                    {/* {visited} */}
                  </li>
                </ul>
              </div>
              <div className="news-slef">{ReactHtmlParser(advText)}</div>
            </article>
          </div>
        </div>
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
