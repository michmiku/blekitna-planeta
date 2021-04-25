import Link from 'next/link'
import styles from 'styles/Article.module.scss'

const ArticleCard = ({ path, title, coverImage, date, excerpt, slug }) => {

    const fullPath = `/${path}/${slug}`

    return (
        <div className={styles.articleCard}>
            <div className={styles.coverImage}>
                <img src={coverImage} alt={title} />
            </div>
            <div className={styles.articleTitle}>
                <h1>{title}</h1>
            </div>
            <div className={styles.articleExcerpt}>
                <p>{excerpt}</p>
            </div>
            <div className={styles.articleBottom}>
                <p>Data publikacji: {date}</p>
                <Link href={fullPath}>
                    <a className={styles.goToArticleButton}>Czytaj</a>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;