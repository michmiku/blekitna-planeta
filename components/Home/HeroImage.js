import React from "react";
import style from "styles/Home.module.scss";
import ControledCarousel from "./ControledCarousel";

const heroSrc = 'url("MZ_002.jpg")';

const HeroImage = () => {
  return (
    <div className={style.heroImage}>
      <div>
        <div className={style.mainCarousel}>
          <ControledCarousel />
        </div>
        <div className={style.heroText}>
          <h1>Błękitna Planeta</h1>
          <p>Sklepy zoologiczne</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
