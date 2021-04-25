import ArticleList from 'components/Articles/ArticleList';
import { getAllPosts } from 'lib/api'
import styles from 'styles/Home.module.scss'

const path = 'nasze-realizacje/akwaria-morskie'

const Home = ({ allPosts, path }) => {
    return (
        <>
            <h1 className={styles.pageHeader}>Aktualności</h1>
            <ArticleList posts={allPosts} path={path} />
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'author',
        'coverImage',
        'excerpt',
    ], path)

    return {
        props: {
            allPosts,
            path
        },
    }
}
