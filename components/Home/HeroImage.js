import React from "react";
import style from "styles/Home.module.scss";

const heroSrc = 'url("MZ_002.jpg")';

const HeroImage = () => {
  return (
    <div className={style.heroImage} style={{ backgroundImage: heroSrc }}>
      <div className="content-container">
        <div className={style.heroText}>
          <h1>Błękitna Planeta</h1>
          <p>Sklep zoologiczny</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
