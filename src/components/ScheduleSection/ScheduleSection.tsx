import { Trans, useTranslation } from 'react-i18next';
import styles from './ScheduleSection.module.css';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

const schedule = {
    mon: '19:00',
    tue: '',
    wed: '20:00',
    thu: '',
    fri: '19:00',
    sat: '',
    sun: '',
};

export const ScheduleSection = () => {
    const { t } = useTranslation();

    const activeDays = weekDays.filter((day) => schedule[day]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('schedule.title')}</h2>

                <div className={styles.desktopTable}>
                    <div className={styles.headerRow}>
                        <div />
                        {weekDays.map((day) => (
                            <div key={day} className={styles.day}>
                                {t(`schedule.days.${day}`)}
                            </div>
                        ))}
                    </div>

                    <div className={styles.scheduleRow}>
                        <div className={styles.event}>{t('schedule.event')}</div>

                        {weekDays.map((day) => (
                            <div key={day} className={styles.time}>
                                {schedule[day]}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.mobileList}>
                    <div className={styles.mobileEvent}>
                        {t('schedule.event')}
                    </div>

                    <div className={styles.mobileTimes}>
                        {activeDays.map((day) => (
                            <div key={day} className={styles.mobileRow}>
                                <span>{t(`schedule.days.${day}`)}</span>
                                <span>{schedule[day]}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.notice}>
                <Trans
                    i18nKey="schedule.notice"
                    components={{
                        email: <a href="mailto:bishkek@buddhism.kg" />,
                    }}
                />
            </div>
        </section>
    );
};