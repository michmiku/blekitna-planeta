import ContactMap from 'components/Contact/ContactMap'
import styles from 'styles/Contact.module.scss'
import InformationsPanel from './InformationsPanel'

const ContactContainer = () => {
    return (
        <>
            <h1 className={styles.pageHeader} >Skontaktuj się z nami!</h1>
            <div className={styles.contactContainer}>
                <ContactMap />
                <InformationsPanel />
            </div>
        </>
    );
};

export default ContactContainer;