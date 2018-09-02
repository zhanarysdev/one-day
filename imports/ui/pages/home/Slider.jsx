import React from "react";
import Carousel from "react-slick";
import { Link } from "react-router-dom";
const Slider = props => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  const meal = () => {
    return props.data.map(item => (
      <div className="item">
        <div className="box_grid" style={{ width: "300px" }}>
          <figure>
            <a
              href="#0"
              className="wish_bt"
              onClick={e => {
                e.preventDefault();
                const data = {
                  userId: Meteor.userId(),
                  follow: item._id
                };
                Meteor.call("UsersCollection.update", data, (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(result);
                  }
                });
              }}
            />
            <Link to={`/advPage/${item._id}`}>
              <img
                src={item.coverImg}
                className="img-fluid"
                alt=""
                width="800"
                height="533"
              />
              <div className="read_more">
                <span>Read more</span>
              </div>
            </Link>
            <small>{item.curCat}</small>
          </figure>
          <div className="wrapper">
            <h3>
              <Link to={`/advPage/${item._id}`}>{item.title}</Link>
            </h3>
            <p>{item.description}</p>
            <span className="price">
              From
              <strong>$54</strong>
              /per person
            </span>
          </div>
          <ul>
            <li>
              <i className="icon_clock_alt" />
              1h 30min
            </li>
            <li>
              <div className="score">
                <span>
                  Superb
                  <em>350 Reviews</em>
                </span>
                <strong>8.9</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    ));
  };
  return (
    <React.Fragment>
      <Carousel {...settings}>{meal()}</Carousel>
    </React.Fragment>
  );
};

export default Slider;
