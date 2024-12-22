import React from 'react';
import './Css/WeatherForm.css';

export default function WeatherForm({ address, setAddress, fetchWeatherData, errorMessage }) {
    return (
        <div className="form">
            <label htmlFor="AddressInput">郵便番号:</label>
            <input
                id="AddressInput"
                placeholder="123-4567(半角)"
                size="8"
                maxLength="8"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={fetchWeatherData} id="SearchButton">送信</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
