import ArticleCard from "./ArticleCard";
import styles from 'styles/Article.module.scss'

const ArticleList = ({ posts, path }) => {

    const postsList = posts.map((post, index) => <ArticleCard path={path} {...post} key={index} />)

    return (
        <div className={styles.articleList}>
            {postsList}
        </div >
    );
};

export default ArticleList;