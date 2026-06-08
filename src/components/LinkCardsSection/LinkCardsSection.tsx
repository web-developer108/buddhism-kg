import { useTranslation } from 'react-i18next';

import { LinkCard } from '../LinkCard/LinkCard';

import karmapaImage from '../../assets/cards/karmapa.webp';
import lamaOleImage from '../../assets/cards/lama-ole.webp';
import moscowImage from '../../assets/cards/moscow.webp';

import styles from './LinkCardsSection.module.css';

const cards = [
    {
        id: 'karmapa',
        image: karmapaImage,
        href: 'https://karmapa.org/',
    },
    {
        id: 'lamaOle',
        image: lamaOleImage,
        href: 'https://www.lama-ole-nydahl.org/',
    },
    {
        id: 'moscow',
        image: moscowImage,
        href: 'https://www.buddhism.ru/',
    },
] as const;

export const LinkCardsSection = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {cards.map((card) => (
                    <LinkCard
                        key={card.id}
                        image={card.image}
                        title={t(`cards.${card.id}.title`)}
                        subtitle={t(`cards.${card.id}.subtitle`)}
                        href={card.href}
                    />
                ))}
            </div>
        </section>
    );
};