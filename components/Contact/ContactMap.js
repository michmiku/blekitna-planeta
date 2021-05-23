import styles from 'styles/Contact.module.scss'

const ContactMap = ({ source }) => {

    return (
        <>
            <div className={styles.contactMap}>
                <h1>Znajdź nas na mapie</h1>
                <div>
                    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9250953434134!2d19.94399061568097!3d49.99401377941485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471643657e843199%3A0xc4ff5821ce5befae!2sB%C5%82%C4%99kitna%20Planeta%20-%20Sklep%20Zoologiczny!5e0!3m2!1spl!2spl!4v1621610332353!5m2!1spl!2spl' ></iframe>
                </div>
            </div >
        </>
    );
};

export default ContactMap;