import styles from './dayNight.module.css';
import CloudyIcon from '../../assets/cloudy.svg';
import NightIcon from '../../assets/night.svg';

export default function DayNight() {
    return (
        <div className={`${styles.dayNight} glass-container`}>
            <p className={styles.title}>Weather forecast<i className="fa-solid fa-chevron-right"></i></p>
            <div className={styles.weather}>
                <img className={styles.weather_icon} src={CloudyIcon} alt=""/>
                <div>
                    <p className={styles.weather_time}>Day</p>
                    <p className={styles.weather_instruction}>The sky will be mostly cloudy.<br />The high will be 66°</p>
                </div>
            </div>
            <div className={styles.weather}>
                <img className={styles.weather_icon} src={NightIcon} alt=""/>
                <div>
                    <p className={styles.weather_time}>Night</p>
                    <p className={styles.weather_instruction}>There will be scattered light rain showers.<br />The low will
                        be 61°</p>
                </div>
            </div>
        </div>
    );
}