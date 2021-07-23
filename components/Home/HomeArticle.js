import React from 'react';
import style from '../../styles/Home.module.scss'

const HomeArticle = ({ isLeft, imgSrc, header, content, color }) => {
    return (
        <article
            className={style.mainArticle}
            style={{ backgroundColor: color }}
        >
            <div className={`${style.articleContent} ${isLeft ? style.leftArticle : style.rightArticle}`}>
                <img src={imgSrc} />
                <div>
                    <h1>{header}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </article>
    );
};

export default HomeArticle;