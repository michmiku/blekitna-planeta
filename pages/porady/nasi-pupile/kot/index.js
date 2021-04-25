import ArticleList from 'components/Articles/ArticleList';
import { getAllPosts } from 'lib/api'

const path = 'porady/nasi-pupile/kot'

const Home = ({ allPosts, path }) => {
    return (
        <ArticleList posts={allPosts} path={path} />
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
