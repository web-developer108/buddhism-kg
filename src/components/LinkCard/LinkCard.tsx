import styles from './LinkCard.module.css';

type LinkCardProps = {
    image: string;
    title: string;
    subtitle: string;
    href: string;
};

export const LinkCard = ({ image, title, subtitle, href }: LinkCardProps) => {
    return (
        <a
            href={href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title}. ${subtitle}`}
        >
            <img src={image} alt={title} className={styles.image} />

            <div className={styles.overlay} aria-hidden="true"  />

            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </a>
    );
};