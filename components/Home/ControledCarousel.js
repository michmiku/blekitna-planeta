import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "styles/Home.module.scss";

const slideOneSrc = "/MZ_002.jpg";
const slideTwoSrc = "/MZ_005.jpg";
const slideThreeSrc = "/MZ_027.jpg";
const slideFourSrc = "/MZ_025.jpg";

const ControledCarousel = () => {
  const files = [slideOneSrc, slideTwoSrc, slideThreeSrc, slideFourSrc];

  return (
    <Carousel fade className={styles.carousel}>
      {files.map((file, key) => (
        <Carousel.Item key={key}>
          <img src={file} className={styles.carouselItem} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControledCarousel;
