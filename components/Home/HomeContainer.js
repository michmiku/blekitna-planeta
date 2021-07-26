import React from 'react';
import AboutUs from './AboutUs';
import ControledCarousel from './ControledCarousel';
import HeroImage from './HeroImage';
import style from "styles/Home.module.scss";
import HomeArticle from './HomeArticle';

const imageOne = './MZ_004.jpg'
const imageTwo = './MZ_015.jpg'
const imageThree = './MZ_050.jpg'

const HomeContainer = () => {

    const articles = [
        {
            imgSrc: imageOne,
            header: 'Lorem ipsum',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus ut ligula accumsan posuere. Sed turpis lectus, fermentum at purus at, tempus dapibus dui. Donec mi ipsum, posuere vitae volutpat in, gravida eget lectus. Cras nec nisl ac nisi euismod tincidunt id ut libero. Praesent ut risus at est luctus venenatis eget nec sapien. Praesent ullamcorper quam sodales, vestibulum dolor at, molestie justo. In accumsan arcu sed posuere fringilla. Praesent placerat elementum mi maximus mattis.`,
            color: `#aedbef`,
        },
        {
            imgSrc: imageTwo,
            header: 'Lorem ipsum',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus ut ligula accumsan posuere. Sed turpis lectus, fermentum at purus at, tempus dapibus dui. Donec mi ipsum, posuere vitae volutpat in, gravida eget lectus. Cras nec nisl ac nisi euismod tincidunt id ut libero. Praesent ut risus at est luctus venenatis eget nec sapien. Praesent ullamcorper quam sodales, vestibulum dolor at, molestie justo. In accumsan arcu sed posuere fringilla. Praesent placerat elementum mi maximus mattis.`,
            color: `#c5cae9`,
        }
        , {
            imgSrc: imageThree,
            header: 'Lorem ipsum',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus ut ligula accumsan posuere. Sed turpis lectus, fermentum at purus at, tempus dapibus dui. Donec mi ipsum, posuere vitae volutpat in, gravida eget lectus. Cras nec nisl ac nisi euismod tincidunt id ut libero. Praesent ut risus at est luctus venenatis eget nec sapien. Praesent ullamcorper quam sodales, vestibulum dolor at, molestie justo. In accumsan arcu sed posuere fringilla. Praesent placerat elementum mi maximus mattis.`,
            color: `#b2ebf2`,
        }
    ]

    return (
        <div>
            <HeroImage />
            {articles.map((article, index) => <HomeArticle key={index} {...article} isLeft={index % 2} />)}
            <div className={style.mainCarousel}>
                <ControledCarousel />
            </div>
        </div>
    );
};

export default HomeContainer;