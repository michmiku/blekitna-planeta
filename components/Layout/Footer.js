import styles from "styles/Home.module.scss";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className={styles.mainFooter}>
        <div className={styles.footerLogo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerAdressess}>
            <p>ul. Myślenicka 133, 30-698 Kraków</p>
            <p>GALERIA SWOSZOWICE CENTRUM</p>
            <p>ul. Spółdzielców 3, 30-682 Kraków</p>
            <p>Osiedle Na Kozłówce</p>
          </div>
          <div className={styles.footerInfo}>
            <p>
              Telefon Swoszowice: <a href={`tel:126585077`}> 12 658 50 77</a>
            </p>
            <p>
              Telefon Spółdzielców: <a href={`tel:124255286`}> 12 425 52 86</a>
            </p>
            {/* <p>Email:</p> */}
          </div>
          <div className={styles.socialMedia}>
            <a
              href="https://www.facebook.com/sklepzoologicznyblekitnaplaneta/"
              target="_blank"
            >
              <FontAwesomeIcon
                className={styles.socialMediaIcon}
                icon={faFacebook}
              />
            </a>

            <a
              href="https://www.instagram.com/blekitnaplaneta1/"
              target="_blank"
            >
              <FontAwesomeIcon
                className={styles.socialMediaIcon}
                icon={faInstagram}
              />{" "}
            </a>
          </div>
        </div>
      </footer>
      <footer className={styles.asideFooter}>
        <p>Copyright © 2021. Błękitna Planeta. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </>
  );
};

export default Footer;
