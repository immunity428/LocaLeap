import React from 'react';
import ToDoList from './ToDoList';
import './Css/WeatherForecast.css';

export default function WeatherForecast({ weatherData, cityName, toDoList, setToDoList }) {
    return (
        <div id="forecast">
            {weatherData.length > 0 && cityName ? (
                <div>
                    <h3>{cityName} の5日間の天気</h3>
                    <div className="weather-grid">
                        {weatherData.map((entry, index) => {
                            const date = new Date(entry.dt * 1000).toLocaleDateString();
                            const temp = entry.main.temp;
                            const description = entry.weather[0].description;
                            const iconUrl = `https://openweathermap.org/img/wn/${entry.weather[0].icon}.png`;

                            return (
                                <div key={index} className="weather-item">
                                    <h4>{date}</h4>
                                    <img src={iconUrl} alt={description} />
                                    <p>気温: {temp}°C</p>
                                    <p>天気: {description}</p>
                                    <ToDoList
                                        dayIndex={index}
                                        toDoList={toDoList}
                                        setToDoList={setToDoList}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <p>郵便番号を入力して天気を取得してください。</p>
            )}
        </div>
    );
}
