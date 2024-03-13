import {useRef, useEffect} from "react";
import styles from './forecast.module.css'
import forecastData from '../../data/forecast.json'
import RainingIcon from '../../assets/ranning.svg'
import SunnyIcon from '../../assets/sunny.svg'
import CloudyIcon from '../../assets/cloudy.svg'

const swiperParams = {
    spaceBetween: 16,
    breakpoints: {
        680: {
            slidesPerView: 2,
        },
        920: {
            slidesPerView: 3,
        },
    },
};

function formatDate(date) {
    const dateObj = new Date(date)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const day = days[dateObj.getDay()]
    const dayOfMonth = dateObj.getDate()
    return `${day} ${dayOfMonth}`
}

function getIcon(icon) {
    switch (icon) {
        case 'raining':
            return RainingIcon
        case 'sunny':
            return SunnyIcon
        case 'cloudy':
            return CloudyIcon
        default:
            return SunnyIcon
    }
}

export default function Forecast() {
    const swiperRef = useRef()

    useEffect(() => {
        Object.assign(swiperRef.current, swiperParams)
        swiperRef.current.initialize()
    }, []);

    const scrollLeft = () => {
        swiperRef.current.swiper.slidePrev()
    }

    const scrollRight = () => {
        swiperRef.current.swiper.slideNext()
    }

    return <div className={styles.forecast}>
        <swiper-container init="false" ref={swiperRef}>
            {forecastData.map((data, i) => (<swiper-slide key={data.date}>
                <div className={`${styles.forecast_swiperItem} glass-container`}>
                    <p className={i === 0 ? styles.today : ''}>{i === 0 ? 'Today' : formatDate(data.date)}</p>
                    <div className={styles.contentContainer}>
                        <img className={styles.icon} src={getIcon(data.weather)} alt={data.weather}/>
                        <div className={styles.temperature}>
                            <p>{data.maxTemperature}°</p>
                            <span className={styles.symbol}>~</span>
                            <p>{data.minTemperature}°</p>
                        </div>
                        <div className={styles.info}>
                            <p className={styles.infoText}>{data.text}</p>
                            <p><i className="fa-solid fa-droplet"></i>{data.rainingChance}%</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>))}
        </swiper-container>
        <button className={`${styles.navButton} ${styles.navButton_left}`} onClick={() => scrollLeft()}>
            <i className="fa-solid fa-caret-left"></i>
        </button>
        <button className={`${styles.navButton} ${styles.navButton_right}`} onClick={() => scrollRight()}>
            <i className="fa-solid fa-caret-right"></i>
        </button>
    </div>
}