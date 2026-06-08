import { useTranslation } from 'react-i18next';
import styles from './MaintenancePage.module.css';

export const MaintenancePage = () => {
    const { t } = useTranslation();

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.logo}>🔧</div>

                <h1>{t('maintenance.title')}</h1>

                <p>{t('maintenance.text1')}</p>

                <p>
                    {t('maintenance.text2')}{' '}
                    <a href="mailto:bishkek@buddhism.kg">
                        bishkek@buddhism.kg
                    </a>.
                </p>

                <p>{t('maintenance.text3')}</p>

                <div className={styles.footer}>
                    {t('maintenance.footer')}
                </div>
            </div>
        </main>
    );
};