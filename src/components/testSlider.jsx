
import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1800,
      autoplaySpeed: 1800,
      cssEase: "linear"
    };
    return (
      <div  className="slider">
        <Slider {...settings}>
          <div>
           <img height={150} src="./img/first.jpg" alt=""/>
          </div>
          <div>
          <img height={150} src="./img/second.jpg" alt=""/>
          </div>
          <div>
          <img  height={150} src="./img/three.jpg" alt=""/>
          </div>
          <div>
          <img height={150} src="./img/four.jpg" alt=""/>
          </div>
          <div>
          <img height={150} src="./img/five.jpg" alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}