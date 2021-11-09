import ArticleList from "components/Articles/ArticleList";
import { getAllPosts } from "lib/api";
import styles from "styles/Home.module.scss";
import React, { useState } from "react";
import BigImage from "components/images/BigImage";
import Images from "components/images/Images";
import Head from "next/head";
const Home = ({ publicIds }) => {
  const [bigPicture, setBigPicture] = useState({
    file: "",
    alt: "",
    path: "",
    state: false,
    id: "",
  });

  const handleClick = (file, alt, path, state, id) => {
    setBigPicture({
      file,
      alt,
      path,
      state,
      id,
    });
  };

  return (
    <div className="content-container margin-top">
      <Head>
        <title>{"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}</title>
        <meta
          name="description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta
          name="og:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}
        />
        <meta
          property="og:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}
        />
        <meta name="og:image" content={"/MZ_002.jpg"} key="ogImage" />
        <meta name="twitter:card" content={"/MZ_002.jpg"} />
        <meta
          name="twitter:description"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}
        />
        <meta
          name="twitter:title"
          content={"Sklepy zoologiczne Błękitna Planeta Kraków - Galeria"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.pageHeader}>Galeria</h1>
      {bigPicture.state ? (
        <BigImage
          file={bigPicture.file}
          alt={bigPicture.alt}
          path={bigPicture.path}
          handleClick={handleClick}
          files={publicIds}
          id={bigPicture.id}
        />
      ) : null}
      <Images
        files={publicIds}
        alt="Kyambalo - showroom"
        path="/blekitna-planeta/"
        handleClick={handleClick}
      />
    </div>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const { cloudinary } = require("../../utils/cloudinary");
  const { resources } = await cloudinary.search
    .expression("folder:blekitna-planeta")
    .sort_by("public_id", "asc")
    .max_results(100)
    .execute();
  const publicIds = resources.map((file) => file.public_id);

  return {
    revalidate: 10,
    props: {
      publicIds,
    },
  };
};
