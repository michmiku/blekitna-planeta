import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import CookieConsent, { Cookies } from "react-cookie-consent";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <meta
          name="description"
          content="Sklepy zoologiczne Błękitna Planeta Kraków"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:type" conetent="website" />
        <meta name="og:title" content="Błękitna planeta" />
        <meta
          property="og:description"
          content="Sklepy zoologiczne Błękitna Planeta Kraków"
        />
        <meta
          name="twitter:description"
          content="Sklepy zoologiczne Błękitna Planeta Kraków"
        />
        <meta name="twitter:title" content="Błęktina planeta" />
      </Head>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    </>
  );
};

export default Layout;
