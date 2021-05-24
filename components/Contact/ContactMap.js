import styles from "styles/Contact.module.scss";

const ContactMap = ({ first }) => {
  return (
    <>
      <div className={styles.contactMap}>
        <div>
          {first ? (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9250953434134!2d19.94399061568097!3d49.99401377941485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471643657e843199%3A0xc4ff5821ce5befae!2sB%C5%82%C4%99kitna%20Planeta%20-%20Sklep%20Zoologiczny!5e0!3m2!1spl!2spl!4v1621610332353!5m2!1spl!2spl"></iframe>
          ) : (
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160.22527132005885!2d19.98130134178438!3d50.01877071604872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4fbe39383609c640!2sWypo%C5%BCyczalnia%20Film%C3%B3w%20Dvd%20%2CBlu-ray%20.Sklep%20zoologiczny.!5e0!3m2!1spl!2spl!4v1621816470333!5m2!1spl!2spl"></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactMap;
