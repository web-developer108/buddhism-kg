import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const isRussian = i18n.language === 'ru';

    const handleChangeLanguage = () => {
        const nextLanguage = isRussian ? 'en' : 'ru';

        i18n.changeLanguage(nextLanguage);

        localStorage.setItem('language', nextLanguage);
    };

    return (
        <button
            type="button"
            onClick={handleChangeLanguage}
            className={styles.languageSwitcher}
            aria-label="Change language"
        >
            <span className={styles.desktop}>
                {isRussian ? 'English' : 'Русский'}
            </span>

            <span className={styles.mobile}>
                {isRussian ? 'EN' : 'РУ'}
            </span>
        </button>
    );
};