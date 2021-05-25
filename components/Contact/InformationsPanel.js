import styles from "styles/Contact.module.scss";

const InformationsPanel = ({ address, name, floor, hours }) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={styles.informationsPanel}>
        <h1>Adres:</h1>
        <hr />
        <p>{address}</p>
        <p>{name}</p>
        <p>{floor}</p>
      </div>
      <div className={styles.informationsPanel}>
        <h1>Godziny otwarcia:</h1>
        <hr />
        <p>Poniedziałek - sobota: {hours}</p>
        <p>Niedziela: nieczynne</p>
      </div>
    </div>
  );
};

export default InformationsPanel;
