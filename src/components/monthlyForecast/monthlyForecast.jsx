import styles from './monthlyForecast.module.css';

export default function MonthlyForecast() {
    return (
        <div className={`${styles.monthlyForecast} glass-container`}>
            <p className={styles.title}>Monthly forecast<i className="fa-solid fa-chevron-right"></i></p>
            <div className={styles.chartContainer}>
                <div className={styles.chart}>
                    <p className={styles.month}>March</p>
                </div>
            </div>
            <div className={styles.forecast}>
                <p className={styles.factor}>
                    Sunny days <span className={styles.sunnyNumber}>17</span>
                </p>
                <p className={styles.factor}>
                    Rain/snow days <span className={styles.rainSnowNumber}>14</span>
                </p>
                <p className={styles.factor}>
                    Average high <span className={styles.temperatureNumber}>75°</span>
                </p>
                <p className={styles.factor}>
                    Average low <span className={styles.temperatureNumber}>65°</span>
                </p>
            </div>
        </div>
    );
}