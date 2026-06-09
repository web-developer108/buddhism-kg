import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import bishkekImage from '../../assets/images/bishkek.webp';
import styles from './BishkekCenterSection.module.css';

export const BishkekCenterSection = () => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleText = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <section className={styles.section}>
            <div className={styles.hero}>
                <img
                    src={bishkekImage}
                    alt={t('bishkekCenter.title')}
                    className={styles.image}
                />

                <div className={styles.overlay} aria-hidden="true" />

                <h1 className={styles.title}>
                    {t('bishkekCenter.title')}
                </h1>
            </div>

            <div className={styles.content}>
                <p>
                    <Trans
                        i18nKey="bishkekCenter.paragraph1"
                        components={{
                            ole: (
                                <a
                                    href="https://lama-ole-nydahl.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ),
                            karmapa: (
                                <a
                                    href="https://www.karmapa.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ),
                        }}
                    />
                </p>

                <p>
                    <Trans
                        i18nKey="bishkekCenter.paragraph2"
                        components={{
                            lineage: (
                                <a
                                    href="https://www.buddhism.ru/o-buddizme/buddizm-v-sovremennom-mire/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ),
                        }}
                    />
                </p>

                {!isExpanded && (
                    <button
                        type="button"
                        className={styles.readMore}
                        onClick={handleToggleText}
                        aria-expanded={isExpanded}
                    >
                        <span className={styles.dots}>○○○</span>
                        {t('bishkekCenter.readMore')}
                    </button>
                )}

                {isExpanded && (
                    <>
                        <p>
                            <Trans
                                i18nKey="bishkekCenter.paragraph3"
                                components={{
                                    buddha: (
                                        <a
                                            href="https://www.buddhism.ru/o-buddizme/zhizn-i-uchenie-buddy/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    ),
                                }}
                            />
                        </p>
                        <p>{t('bishkekCenter.paragraph4')}</p>
                        <p>{t('bishkekCenter.paragraph5')}</p>
                        <p>{t('bishkekCenter.paragraph6')}</p>

                        <p>
                            <Trans
                                i18nKey="bishkekCenter.paragraph7"
                                components={{
                                    email: <a href="mailto:bishkek@buddhism.kg" />,
                                }}
                            />
                        </p>
                    </>
                )}
            </div>
        </section>
    );
};