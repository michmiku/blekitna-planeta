import styles from 'styles/Contact.module.scss'

const InformationsPanel = () => {
    return (
        <div className={styles.informationsPanel}>
            <h1>Adres:</h1>
            <hr />
            <p> ul. Myślenicka 133, 30-698 Kraków</p>
            <p>GALERIA SWOSZOWICE CENTRUM</p>
            <p>I Piętro</p>
        </div>
    );
};

export default InformationsPanel;