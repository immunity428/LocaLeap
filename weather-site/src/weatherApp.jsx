import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherForecast from './weatherForecast.jsx';
import './Css/weatherApp.css';

export default function WeatherApp() {
    const [address, setAddress] = useState(""); // 郵便番号
    const [weatherData, setWeatherData] = useState([]); // 天気データ
    const [cityName, setCityName] = useState(""); // 市名
    const [errorMessage, setErrorMessage] = useState(""); // エラーメッセージ
    const [toDoList, setToDoList] = useState([[], [], [], [], []]); // 各日のToDoリスト

    const apiKey = import.meta.env.VITE_API_KEY;

    const fetchWeatherData = () => {
        const formCheck = /[^\x01-\x7E]/.test(address);
        if (formCheck) {
            setErrorMessage('郵便番号は半角で入力してください。');
            setAddress("");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${address},jp&appid=${apiKey}&units=metric&lang=ja`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.list.filter((_, index) => index % 8 === 0);
                setWeatherData(filteredData);
                setCityName(data.city.name);
                setErrorMessage("");
            })
            .catch(() => {
                setErrorMessage('天気情報の取得に失敗しました');
                setAddress("");
            });
    };

    return (
        <div>
            <h1>天気予報サイト</h1>
            <div className="app">
                <WeatherForm
                    address={address}
                    setAddress={setAddress}
                    fetchWeatherData={fetchWeatherData}
                    errorMessage={errorMessage}
                />
                <WeatherForecast
                    weatherData={weatherData}
                    cityName={cityName}
                    toDoList={toDoList}
                    setToDoList={setToDoList}
                />
            </div>
        </div>
    );
}
