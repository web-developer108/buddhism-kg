import { useTranslation } from 'react-i18next';

import styles from './ContactsSection.module.css';

export const ContactsSection = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    {t('contacts.title')}
                </h2>

                <div className={styles.contactCard}>
                    <span className={styles.label}>
                        {t('contacts.emailLabel')}
                    </span>

                    <a
                        href="mailto:bishkek@buddhism.kg"
                        className={styles.email}
                    >
                        bishkek@buddhism.kg
                    </a>
                </div>
            </div>
        </section>
    );
};
