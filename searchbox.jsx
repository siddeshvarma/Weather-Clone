import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";   

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "48db0c5686125356b48231ff352b272f";
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            
            // Handle cases where the API returns an error (like city not found)
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message || "Error fetching data");
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;
        } catch (err) {
            setError(true);
            console.error(err);
            return null;
        }
    };
    
    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");  // Reset the city state to an empty string

            let newInfo = await getWeatherInfo();
            if (newInfo) {
                updateInfo(newInfo);  // Update the parent component with the new weather info
                setError(false);  // Reset error state if the request is successful
            }
        } catch (err) {
            setError(true);  // Set error state if something goes wrong
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists or an error occurred!</p>}
            </form>
        </div>
    );
}
