import ArticleList from "components/Articles/ArticleList";
import { getAllPosts } from "lib/api";
import styles from "styles/Home.module.scss";

const Home = ({ allPosts, path }) => {
  return (
    <div className="content-container margin-top">
      <h1 className={styles.pageHeader}>Aktualności</h1>
      {/* <ArticleList posts={allPosts} path={path} /> */}
    </div>
  );
};

export default Home;
