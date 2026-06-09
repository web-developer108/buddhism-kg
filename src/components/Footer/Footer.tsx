import styles from './Footer.module.css';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                © 2009–{currentYear}
            </div>
        </footer>
    );
};