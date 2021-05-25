import ArticleList from "components/Articles/ArticleList";
import { getAllPosts } from "lib/api";
import styles from "styles/Home.module.scss";

const Home = ({ allPosts, path }) => {
  return (
    <div className="content-container">
      <h1 className={styles.pageHeader}>Aktualności</h1>
      <ArticleList posts={allPosts} path={path} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const path = "aktualnosci";
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    path
  );

  return {
    props: {
      allPosts,
      path,
    },
  };
}
