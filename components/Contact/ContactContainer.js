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
        <h1 className={styles.cityHeader}>Osiedle Na Kozłówce</h1>
        <div className={styles.contactContainer}>
          <ContactMap first={false} />
          <InformationsPanel
            address={"ul. Spółdzielców 3, 30-682 Kraków"}
            name={"Osiedle Na Kozłówce"}
            phone="12 425 52 86"
            hours={"09:00–19:00"}
          />
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
