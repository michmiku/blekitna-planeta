import styles from 'styles/Home.module.scss';
import Image from 'next/image';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <footer className={styles.mainFooter}>
                <div className={styles.footerLogo}>
                    <img src='./logo.png' alt='logo' />
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.footerAdressess}>
                        <p>ul. Myślenicka 133, 30-698 Kraków</p>
                        <p>GALERIA SWOSZOWICE CENTRUM</p>
                        <p>ul. Spółdzielców 3, 30-682 Kraków</p>
                        <p>Osiedle Na Kozłówce</p>
                    </div>
                    <div className={styles.footerInfo}>
                        <p>Telefon: </p>
                        <p>Email:</p>
                    </div>
                    <div className={styles.socialMedia}>
                        <FontAwesomeIcon className={styles.socialMediaIcon} icon={faFacebook} />
                        <FontAwesomeIcon className={styles.socialMediaIcon} icon={faTwitter} />
                        <FontAwesomeIcon className={styles.socialMediaIcon} icon={faInstagram} />
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