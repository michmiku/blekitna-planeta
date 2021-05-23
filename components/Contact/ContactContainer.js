import ContactMap from 'components/Contact/ContactMap'
import styles from 'styles/Contact.module.scss'
import InformationsPanel from './InformationsPanel'

const ContactContainer = () => {
    return (
        <>
            <h1 className={styles.pageHeader} >Skontaktuj się z nami!</h1>
            <div className={styles.contactInformations}>
                <div>
                    <h1>Godziny otwarcia:</h1>
                    <hr />
                    <p>Poniedziałek - sobota: 10:00 - 20:00</p>
                    <p>Niedziela: nieczynne</p>
                </div>
                <div>
                    <h1>Telefon:</h1>
                    <hr />
                    <p>12 658 50 77</p>
                </div>
            </div>
            <h1 className={styles.cityHeader}>Miasto 1</h1>
            <div className={styles.contactContainer}>
                <ContactMap />
                <InformationsPanel />
            </div>
            <h1 className={styles.cityHeader}>Miasto 2</h1>
            <div className={styles.contactContainer}>
                <ContactMap />
                <InformationsPanel />
            </div>
        </>
    );
};

export default ContactContainer;