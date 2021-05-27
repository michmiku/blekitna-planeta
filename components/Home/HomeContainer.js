import React from 'react';
import AboutUs from './AboutUs';
import ControledCarousel from './ControledCarousel';
import HeroImage from './HeroImage';
import style from "styles/Home.module.scss";

const HomeContainer = () => {
    return (
        <div>
            <HeroImage />
            <div className={style.mainCarousel}>
                <ControledCarousel />
            </div>
            <AboutUs />
        </div>
    );
};

export default HomeContainer;