import styles from "styles/Home.module.scss";
import Head from "next/head";
const Porady = () => {
  return (
    <div className="content-container margin-top">
      <Head>
        <title>{"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}</title>
        <meta
          name="description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta
          name="og:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}
        />
        <meta
          property="og:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}
        />
        <meta name="og:image" content={"/MZ_002.jpg"} key="ogImage" />
        <meta name="twitter:card" content={"/MZ_002.jpg"} />
        <meta
          name="twitter:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}
        />
        <meta
          name="twitter:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Porady"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          height: "100%",
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <a href="porady/okiem-akwarysty">Okiem akwarysty</a>
        <a href="porady/nasi-pupile">Nasi pupile</a>
      </div>
    </div>
  );
};

export default Porady;
