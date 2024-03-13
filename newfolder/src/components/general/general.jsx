import styles from "./general.module.css";
import CloudyIcon from "../../assets/cloudy.svg"
import ArrowRightDown from "../../assets/arrow-right-down.svg"

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export default function General() {
    const currentDate = new Date()


    return <div className={styles.general}>
        <div className={styles.first}>
            <div>
                <p className={styles['current-weather']}>Current weather</p>
                <time className={styles.time}>{formatAMPM(currentDate)}</time>
            </div>
            <div className={styles.report}>
                <i className="fa-regular fa-message"></i>
                report weather
            </div>
        </div>
        <div className={styles.second}>
            <img className={styles['weather-icon']} src={CloudyIcon} alt="weather icon"/>
            <div className={styles.temperature}>
                <p className={styles.temperature__temp}>64</p>
                <sup className={styles.temperature__sup}>o</sup>
                <span className={styles.temperature__unit}>F</span>
            </div>
            <div className={styles.predict}>
                <p className={styles.predict__condition}>Cloudy</p>
                <p className={styles.predict__text}>Feels like <span>70°</span></p>
            </div>
        </div>
        <p className={styles.guide}>The skies will be mostly cloudy. The high will be 66°.</p>
        <div className={styles.third}>
            <div className={styles.info}>
                <p className={styles.info__text}>Air quality
                    <i className={`fa-regular fa-circle-question ${styles.info_icon}`}></i>
                </p>
                <p className={styles.air_quantity}>126</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text}>Wind
                    <i className={`fa-regular fa-circle-question ${styles.info_icon}`}></i>
                </p>
                <p className={styles.wind}>3 mph<img className={styles.wind_icon} src={ArrowRightDown} alt=""/></p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text}>Humidity
                    <i className={`fa-regular fa-circle-question ${styles.info_icon}`}></i>
                </p>
                <p>87%</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text}>Visibility
                    <i className={`fa-regular fa-circle-question ${styles.info_icon}`}></i>
                </p>
                <p>&#62; 10km</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text}>Pressure
                    <i className={`fa-regular fa-circle-question ${styles.info_icon}`}></i>
                </p>
                <p>30 in</p>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text}>Dew point</p>
                <p>59°</p>
            </div>
        </div>
    </div>
}