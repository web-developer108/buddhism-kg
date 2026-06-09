import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PrivacyModal } from '../PrivacyModal/PrivacyModal';
import styles from './Footer.module.css';

export const Footer = () => {
    const { t } = useTranslation();
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.copyright}>
                        {t('footer.copyright', { year: currentYear })}
                    </div>

                    <button
                        type="button"
                        className={styles.privacyButton}
                        onClick={() => setIsPrivacyOpen(true)}
                    >
                        {t('footer.privacy')}
                    </button>
                </div>
            </footer>

            <PrivacyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
        </>
    );
};