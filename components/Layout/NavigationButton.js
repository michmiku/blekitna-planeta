import Link from 'next/link';
import styles from 'styles/Home.module.scss';

const NavigationButton = ({ parentLink, link, content, isAside, dropdowns }) => {

    const fullLink = `${parentLink}/${link}`
    const dropdownsLink = dropdowns.map((item, index) => <NavigationButton parentLink={fullLink} {...item} key={index} />)

    return (
        dropdowns.length !== 0 ? (
            <div className={styles.linkContainer}>
                <div className={styles.dropdown}>
                    <a className={styles.navBtn}>{content}</a>
                    <div className={`${styles.dropdownContent} ${isAside ? styles.aside : ''}`}>
                        {dropdowns.length != 0 && dropdownsLink}
                    </div>
                </div>
            </div>
        ) : (
            <Link href={fullLink}>
                <div className={styles.linkContainer}>
                    <div className={styles.dropdown}>
                        <a className={styles.navBtn}>{content}</a>
                    </div>
                </div>
            </Link>
        )
    );
};

export default NavigationButton;