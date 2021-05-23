import React from 'react';
import style from 'styles/Home.module.scss'

const heroSrc = 'url("rybuoko3.jpg")'

const HeroImage = () => {
    return (
        <div className={style.heroImage}
            style={{ backgroundImage: heroSrc }}>
            <div className={style.heroText}>
                <h1>Błękitna Planeta</h1>
                <p>Sklep zoologiczny</p>
            </div>
        </div>
    );
};

export default HeroImage;