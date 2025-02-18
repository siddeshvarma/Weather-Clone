import SearchBox from "./searchbox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./WeatherApp.css"; 
export default function WeatherApp() {
    // Initialize weather info state with default values
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelslike: 30.2,
        humidity: 22,
        temp: 32.11,
        tempMax: 32.11,
        tempMin: 32.11,
        weather: "clear sky"
    });

    // Function to update weather info
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="WeatherApp">
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
