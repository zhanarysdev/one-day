import React from 'react'
import Carousel from "react-slick";

const Slider = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const meal = () => {
        return props.data.map(item => (
            <div className="item">
            <div className="box_grid">
                <figure>
                    <a href="#0" className="wish_bt"></a>
                    <a href="tour-detail.html">
                        <img
                            src={item.img}
                            className="img-fluid"
                            alt=""
                            width="800"
                            height="533"/>
                        <div className="read_more">
                            <span>Read more</span>
                        </div>
                    </a>
                    <small>Historic</small>
                </figure>
                <div className="wrapper">
                    <h3>
                        <a href="tour-detail.html">{item.title}</a>
                    </h3>
                    <p>{item.description}</p>
                    <span className="price">From
                        <strong>$54</strong>
                        /per person</span>
                </div>
                <ul>
                    <li>
                        <i className="icon_clock_alt"></i>
                        1h 30min</li>
                    <li>
                        <div className="score">
                            <span>Superb<em>350 Reviews</em>
                            </span>
                            <strong>8.9</strong>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        ))
    }
    return (
        <React.Fragment>
            <Carousel {...settings}>
               {meal()}
            </Carousel>
        </React.Fragment>
    )
}

export default Slider