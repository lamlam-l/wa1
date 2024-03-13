import {useState} from 'react'
import './App.css'
import CloudBackground from './assets/cloud-background.jpg'
import General from './components/general/general.jsx'
import Map from "./components/map/map.jsx";
import Forecast from "./components/forecast/forecast.jsx"
import DayNight from "./components/dayNight/dayNight.jsx";
import Suggestion from "./components/suggestion/suggestion.jsx";
import SunMoon from "./components/sunMoon/sunMoon.jsx";
import MonthlyForecast from "./components/monthlyForecast/monthlyForecast.jsx";
import Temperature from "./components/temperature/temperature.jsx";
import RainSnow from "./components/rainSnow/rainSnow.jsx";

function App() {
    const [unit, setUnit] = useState("f");

    return (
        <main className="main">
            <div className="weather-background">
                <img src={CloudBackground}/>
            </div>
            <div className="content">
                <header className="header">
                    <p className="header__text">Hanoi, Vietnam <i className="header__icon fa-solid fa-chevron-down"></i>
                    </p>
                    <div className="glass-container temperature-unit">
                        <p className={`temperature-unit__unit ${unit === 'f' && 'temperature-unit__unit--active'}`}
                           onClick={() => setUnit('f')}>
                            <sup>o</sup>F</p>
                        <p className={`temperature-unit__unit ${unit === 'c' && 'temperature-unit__unit--active'}`}
                           onClick={() => setUnit('c')}>
                            <sup>o</sup>C</p>
                    </div>
                </header>
                <div className="g-container">
                    <div className="container__general">
                        <General/>
                    </div>
                    <div className="container__map">
                        <Map/>
                    </div>
                    <div className="container__forecast">
                        <Forecast/>
                    </div>
                    <p className="weatherInsight">WEATHER INSIGHT</p>
                    <div className="container__info">
                        <DayNight/>
                    </div>
                    <div className="container__info">
                        <SunMoon/>
                    </div>
                    <div className="container__info">
                        <MonthlyForecast/>
                    </div>
                    <div className="container__info">
                        <Temperature/>
                    </div>
                    <div>
                        <RainSnow/>
                    </div>
                    <div className="container__info">
                        <Suggestion/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
