import HomeContainer from "components/Home/HomeContainer";
import styles from "styles/Home.module.scss";
import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{"Sklep zoologiczny Błękitna Planeta Kraków"}</title>
        <meta
          name="description"
          content={"Sklep zoologiczny Błękitna Planeta Kraków"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta
          name="og:title"
          content={"Sklep zoologiczny Błękitna Planeta Kraków"}
        />
        <meta
          property="og:description"
          content={"Sklep zoologiczny Błękitna Planeta Kraków"}
        />
        <meta name="og:image" content={"/MZ_002.jpg"} key="ogImage" />
        <meta name="twitter:card" content={"/MZ_002.jpg"} />
        <meta
          name="twitter:description"
          content={"Sklep zoologiczny Błękitna Planeta Kraków"}
        />
        <meta
          name="twitter:title"
          content={"Sklep zoologiczny Błękitna Planeta Kraków"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
    </div>
  );
}
