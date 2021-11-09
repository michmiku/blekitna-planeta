import ContactContainer from "components/Contact/ContactContainer";
import styles from "styles/Home.module.scss";
import Head from "next/head";
const kontakt = () => {
  return (
    <div className={styles.contact}>
      <Head>
        <title>{"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}</title>
        <meta
          name="description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta
          name="og:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}
        />
        <meta
          property="og:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}
        />
        <meta name="og:image" content={"/MZ_002.jpg"} key="ogImage" />
        <meta name="twitter:card" content={"/MZ_002.jpg"} />
        <meta
          name="twitter:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}
        />
        <meta
          name="twitter:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Kontakt"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactContainer />
    </div>
  );
};

export default kontakt;
