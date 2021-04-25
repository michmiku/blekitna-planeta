import styles from 'styles/Article.module.scss'

const Article = ({ title, date, content, coverImage }) => {
    return (
        <article className={styles.article}>
            <div className={styles.coverImage}>
                <img src={coverImage} alt="coverImage" />
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div
                className={styles.articleContent}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
};

export default Article;