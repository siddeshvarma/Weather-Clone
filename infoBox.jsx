import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css"; // Import the CSS file for styling
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {  // Destructure the info prop
    const INIT_URL = "https://images.unsplash.com/photo-1691848749209-025ba660a194?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINY_URL = "https://images.unsplash.com/photo-1513069020900-a162c4db0762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    // Determine the appropriate image URL and icon based on weather conditions
    const weatherImage = 
        info.humidity > 80 ? RAINY_URL :
        info.temp > 30 ? HOT_URL : // Increase temp threshold for hot weather
        COLD_URL;

    // Determine the weather icon based on conditions
    const weatherIcon = 
        info.humidity > 80 ? <ThunderstormIcon style={{ fontSize: 50 }} /> : // Rainy weather icon
        info.temp > 30 ? <WbSunnyIcon style={{ fontSize: 50 }} /> : // Hot weather icon
        <AcUnitIcon style={{ fontSize: 50 }} />; // Cold weather icon

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherImage}
                        title="weather image"
                    />
                    <CardContent>
                        {/* Centering the city name and weather icon */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {/* City Name */}
                            </Typography>
                            <span style={{ marginTop: 5 }}>
                                {weatherIcon} {/* Weather Icon */}
                            </span>
                        </div>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature: {info.temp}&deg;C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Min Temperature: {info.tempMin}&deg;C</p>
                            <p>Max Temperature: {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like: {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
