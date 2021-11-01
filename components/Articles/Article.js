import styles from "styles/Article.module.scss";
import Head from 'next/head'

const Article = ({ title, date, content, coverImage, excerpt }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={excerpt}
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          property="og:locale"
          content="pl_PL"
        />
        <meta
          property="og:type"
          conetent="website"
        />
        <meta
          name="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={excerpt}
        />
        <meta
          name="og:image"
          content={coverImage}
          key="ogImage"
        />
        <meta 
          name="twitter:card" 
          content={coverImage}
        />
         <meta
          name="twitter:description"
          content={excerpt}
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={styles.article}>
        <div className={styles.coverImage}>
          <img src={coverImage} alt="coverImage" />
        </div>
        <div className="content-container">
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </>
  );
};

export default Article;
