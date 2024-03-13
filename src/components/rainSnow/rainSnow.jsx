import styles from './rainSnow.module.css';
import DropIcon from '../../assets/drop.svg'
import SnowIcon from '../../assets/snow.svg'

export default function RainSnow() {
    return (
        <div className={`${styles.rainSnow} glass-container`}>
            <p className={styles.title}>Precipitation record for Mar 10<i className="fa-solid fa-chevron-right"></i></p>
            <div className={styles.content}>
                <img src={DropIcon} alt=""/>
                <div>
                    <p className={styles.data}>Rain days <span className={styles.value}>25</span></p>
                    <p className={styles.data}>Average <span className={styles.value}>0.07 in</span></p>
                    <p className={styles.data}>Records <span className={styles.value}>0.31 in (1994)</span></p>
                </div>
            </div>
            <div className={styles.content}>
                <img src={SnowIcon} alt=""/>
                <div>
                    <p className={styles.data}>Rain days <span className={styles.value}>0</span></p>
                    <p className={styles.data}>Average <span className={styles.value}>0 in</span></p>
                    <p className={styles.data}>Records <span className={styles.value}>0 in (1951)</span></p>
                </div>
            </div>
        </div>
    );
}