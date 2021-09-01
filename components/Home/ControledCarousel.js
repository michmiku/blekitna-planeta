import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "styles/Home.module.scss";

const slideOneSrc = "/MZ_005.jpg";
const slideTwoSrc = "/MZ_013.jpg";
const slideThreeSrc = "/MZ_022.jpg";

const ControledCarousel = () => {
  const files = [slideOneSrc, slideTwoSrc, slideThreeSrc];

  return (
    <Carousel fade>
      {files.map((file, key) => (
        <Carousel.Item key={key}>
          <img src={file} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControledCarousel;
