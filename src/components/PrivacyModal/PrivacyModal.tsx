import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PrivacyModal.module.css';

type PrivacyModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="privacy-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label={t('privacy.close')}
                >
                    ×
                </button>

                <h2 id="privacy-title" className={styles.title}>
                    {t('privacy.title')}
                </h2>

                <div className={styles.content}>
                    <p>{t('privacy.text1')}</p>
                    <p>{t('privacy.text2')}</p>
                    <p>{t('privacy.text3')}</p>
                </div>

                <button
                    type="button"
                    className={styles.actionButton}
                    onClick={onClose}
                >
                    {t('privacy.close')}
                </button>
            </div>
        </div>
    );
};