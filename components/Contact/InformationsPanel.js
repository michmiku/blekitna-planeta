import styles from 'styles/Contact.module.scss'

const InformationsPanel = () => {
    return (
        <div className={styles.informationsPanel}>
            <h1>Godziny otwarcia:</h1>
            <hr />
            <p>Poniedziałek - sobota: 10:00 - 20:00</p>
            <p>Niedziela: nieczynne</p>
            <h1>Adres:</h1>
            <hr />
            <p> ul. Myślenicka 133, 30-698 Kraków</p>
            <p>GALERIA SWOSZOWICE CENTRUM</p>
            <p>I Piętro</p>
            <h1>Telefon:</h1>
            <hr />
            <p>12 658 50 77</p>
        </div>
    );
};

export default InformationsPanel;