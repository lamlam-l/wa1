import styles from './temperature.module.css';
import ThermometerImage from '../../assets/temperature_record.svg';

export default function Temperature() {
    return (
        <div className={`${styles.temperature} glass-container`}>
            <p className={styles.title}>Temperature record for Mar 10<i className="fa-solid fa-chevron-right"></i></p>
            <div className={styles.content}>
                <div>
                    <div className={styles.data}>
                        <p className={styles.text}>Record high</p>
                        <p className={styles.value}>94° (1987)</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.text}>Record low</p>
                        <p className={styles.value}>54° (1996)</p>
                    </div>
                </div>
                <div className={styles.thermometerContainer}>
                    <img src={ThermometerImage} alt="Thermometer"/>
                </div>
                <div>
                    <div className={styles.data}>
                        <p className={styles.text}>Average high</p>
                        <p className={styles.value}>74°</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.text}>Average low</p>
                        <p className={styles.value}>63</p>
                    </div>
                </div>
            </div>
        </div>
    );
}