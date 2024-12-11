import React, { useState } from 'react';

export default function MyApp() {
    //useStateは値の保持や更新するためのフック
    //const [変数名, 関数名(この関数の引数が更新する値)] =useState(状態の初期値)
    const [Address, setAddress] = useState(""); // 郵便番号
    const [weatherData, setWeather] = useState(null); // 天気データ
    const [cityName, setCity] = useState(""); // 市名
    const apiKey = "Your_api_key"; // OpenWeatherMapのAPIキーを設定
    //ハードコーキング防止のため、ゆくゆくは環境変数にしていきたい

    // ボタンがクリックされたときの処理
    const ButtonClick = () => {

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${Address},jp&appid=${apiKey}&units=metric&lang=ja`;

        //(gptで生成したから、なるべく早く理解しておくこと)
        fetch(apiUrl)//指定したURL（apiUrl）に対してHTTPリクエストを送信
            .then(response => response.json())  // fetchが成功したらresponseとして受け取りjsonに変換
            .then(data => {//dataにはJSON形式で解析されたAPIからのレスポンスデータが格納
                setWeather(data.list[0]);  // useStateで更新
                setCity(data.city.name);   // 上と同じ
            })
            .catch(error => {//リクエストが失敗した場合や、JSON解析に失敗した場合など、エラーが発生した場合
                console.error("天気情報の取得に失敗しました:", error);//でばっぐ用？
                alert('天気情報の取得に失敗しました');//視覚的な通知
            });
    };

    return (//普通にHtml
        <div>
            <h1>天気予報サイト</h1>
            <div className="app">

                <div className="form">
                    <label htmlFor="postalCode">郵便番号:</label>
                    <input
                        name="AddressForm"
                        placeholder='123-4567'
                        size="8"
                        maxLength="8"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)} // <input>のvalueの値をsetAddressの引数にして実行
                    //onChangeイベントはユーザーがフィールドで文字の入力や削除が行われるたびに発生してる
                    />
                    <button id="SearchButton" onClick={ButtonClick}>送信</button>
                </div>

                <div id="forecast">
                    <h2>天気予報</h2>
                    {/* 条件付きレンダリング>>weatherDataとcityNameが両方入力されていれば上*/}
                    {weatherData && cityName ? (
                        <div>
                            <p>場所: {cityName}</p>
                            <p>天気: {weatherData.weather[0].description}</p>
                            <p>気温: {weatherData.main.temp}°C</p>
                        </div>
                    ) : (
                        <p>郵便番号を入力して天気を取得してください。</p>
                    )}
                </div>
            </div>
        </div>
    );
}
