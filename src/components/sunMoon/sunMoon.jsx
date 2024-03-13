import styles from './sunMoon.module.css';
import SunRiseIcon from '../../assets/sunrise.svg';
import SunSetIcon from '../../assets/sun-set.svg';
import MoonRiseIcon from '../../assets/moon-rise.svg';
import MoonSetIcon from '../../assets/moon-set.svg';
import ProgressCircle from '../../assets/progressCircle.svg';
export default function SunMoon() {
    return (
        <div className={`${styles.sunMoon} glass-container`}>
            <p className={styles.title}>Sun/Moon (Mar 10)</p>
            <div className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.icon} src={SunRiseIcon} alt=""/>
                    <p className={styles.text}>Sunrise</p>
                    <time className={styles.time}>6:08 AM</time>
                </div>
                <div className={styles.chart}>
                    <p className={styles.duration}>11 hr 55 min</p>
                    <img className={styles.bar} src={ProgressCircle} alt=""/>
                </div>
                <div className={styles.content}>
                    <img className={styles.icon} src={SunSetIcon} alt=""/>
                    <p className={styles.text}>Sunset</p>
                    <time className={styles.time}>6:08 AM</time>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <img className={styles.icon} src={MoonRiseIcon} alt=""/>
                    <p className={styles.text}>Moonrise</p>
                    <time className={styles.time}>6:08 AM</time>
                </div>
                <div className={styles.chart}>
                    <p className={styles.duration}>10 hr 45 min</p>
                    <img className={styles.bar} src={ProgressCircle} alt=""/>
                </div>
                <div className={styles.content}>
                    <img className={styles.icon} src={MoonSetIcon} alt=""/>
                    <p className={styles.text}>Moonset</p>
                    <time className={styles.time}>6:08 AM</time>
                </div>
            </div>
        </div>
    );
}