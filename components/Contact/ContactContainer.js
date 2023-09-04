import ContactMap from "components/Contact/ContactMap";
import styles from "styles/Contact.module.scss";
import InformationsPanel from "./InformationsPanel";

const ContactContainer = () => {
  return (
    <>
      <div className={styles.pageHeader}>
        <div className="content-container">
          <h1>Skontaktuj się z nami!</h1>
        </div>
      </div>
      <div className="content-container">
        <h1 className={styles.cityHeader}>Swoszowice</h1>
        <div className={styles.contactContainer}>
          <ContactMap first={true} />
          <InformationsPanel
            address={"ul. Myślenicka 133, 30-698 Kraków"}
            name={"GALERIA SWOSZOWICE CENTRUM"}
            phone="12 658 50 77"
            floor={"I Piętro"}
            hours={"10:00–20:00"}
          />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
