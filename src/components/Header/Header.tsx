import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

import logoRu from '../../assets/logo-ru.svg';
import logoEn from '../../assets/logo-en.svg';

import styles from './Header.module.css';

export const Header = () => {
    const { i18n } = useTranslation();

    const currentLanguage = i18n.resolvedLanguage || i18n.language;
    const logo = currentLanguage.startsWith('ru') ? logoRu : logoEn;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <p className={styles.logoLink} aria-label="Buddhism.kg">
                    <img
                        key={currentLanguage}
                        src={logo}
                        alt="Buddhism.kg"
                        className={styles.logo}
                    />
                </p>

                <LanguageSwitcher />
            </div>
        </header>
    );
};