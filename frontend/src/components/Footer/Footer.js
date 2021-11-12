import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            &copy; Mike Fox&apos;s Hot Tuts {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;
