import React from "react";
import styles from "../../styles/Home.module.scss";

const HomeArticle = ({
  isLeft,
  imgSrc,
  header,
  content,
  color,
  belowImageText,
}) => {
  return (
    <article className={styles.mainArticle} style={{ backgroundColor: color }}>
      <div
        className={`${styles.articleContent} ${
          isLeft ? styles.leftArticle : styles.rightArticle
        }`}
      >
        <img src={imgSrc} />
        <div>
          <h1>{header}</h1>
          <span>{content}</span>
        </div>
      </div>
      <div className={styles.textBelow}>
        <span>{belowImageText}</span>
      </div>
    </article>
  );
};

export default HomeArticle;
