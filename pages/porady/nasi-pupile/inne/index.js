import ArticleList from "components/Articles/ArticleList";
import { getAllPosts } from "lib/api";
import styles from "styles/Home.module.scss";
import Head from "next/head";
const path = "porady/nasi-pupile/inne";

const Home = ({ allPosts, path }) => {
  return (
    <div className="content-container margin-top">
      <Head>
        <title>{"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}</title>
        <meta
          name="description"
          content={"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta
          name="og:title"
          content={"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}
        />
        <meta
          property="og:description"
          content={"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}
        />
        <meta name="og:image" content={"/MZ_002.jpg"} key="ogImage" />
        <meta name="twitter:card" content={"/MZ_002.jpg"} />
        <meta
          name="twitter:description"
          content={"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}
        />
        <meta
          name="twitter:title"
          content={"Sklep Zoologiczny Błękitna Planeta Kraków - Inne"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.pageHeader}>Inne</h1>
      <ArticleList posts={allPosts} path={path} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
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
