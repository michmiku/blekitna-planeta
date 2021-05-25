import React from 'react';
import AboutUs from './AboutUs';
import ControledCarousel from './ControledCarousel';
import HeroImage from './HeroImage';

const HomeContainer = () => {
    return (
        <div>
            <HeroImage />
            <ControledCarousel />
            <AboutUs />
        </div>
    );
};

export default HomeContainer;