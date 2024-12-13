import React, { useState } from 'react';
import './App.css';

export default function MyApp() {
    //useStateは値の保持や更新するためのフック再レンダリングできる特徴あり
    //const [変数名, 関数名(この関数の引数が更新する値)] =useState(状態の初期値)
    const [Address, setAddress] = useState(""); // 郵便番号
    const [weatherData, set5daysWeather] = useState([]); // 天気データ
    const [cityName, setCity] = useState(""); // 市名
    const apiKey = import.meta.env.VITE_API_KEY;
    //ハードコーキング防止のため、ゆくゆくは環境変数にしていきたい

    // ボタンがクリックされたときの処理
    const ButtonClick = () => {

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${Address},jp&appid=${apiKey}&units=metric&lang=ja`;

        fetch(apiUrl)  // 引数に設定したURL（apiUrl）に対してHTTPリクエストを送信
            .then(response => response.json())  // fetchが成功したらresponseとして受け取りjsonに変換
            .then(data => {  //dataにはJSON形式で解析されたAPIからのレスポンスデータが格納
                // 3時間ごとのデータから1日ごとにデータを抽出
                const fivedaysforecast = data.list.filter((entry, index) => index % 8 === 0);
                set5daysWeather(fivedaysforecast);  // 5日分の天気のデータをuseStateで更新
                setCity(data.city.name);  // 上と同じ
            })
            .catch(error => {  // リクエストが失敗した場合や、JSON解析に失敗した場合など、エラーが発生した場合
                console.error("天気情報の取得に失敗しました:", error);  // でばっぐ用？
                alert('天気情報の取得に失敗しました');  // 視覚的な通知
            });
    };

    return (  // 普通にHtml
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
                        onChange={(e) => setAddress(e.target.value)}  // <input>のvalueの値をsetAddressの引数にして実行
                    // onChangeイベントはユーザーがフィールドで文字の入力や削除が行われるたびに発生してる
                    />
                    <button id="SearchButton" onClick={ButtonClick}>送信</button>
                </div>

                <div id="forecast">
                    {/* 条件付きレンダリング>>weatherDataとcityNameが両方入力されていれば上*/}
                    {weatherData && cityName ? (
                        // 5日分の天気の出力(gpt生成)
                        <div>
                            {/* 都市名の表示 */}
                            <h3>{cityName} の5日間の天気</h3>

                            <div className="weather-grid">
                                {/*  weatherData配列の各要素（1日の天気データ）を処理し、それぞれに対応するHTMLを生成 */}
                                {/* {weatherData.map((entry) => {  この方法だと警告文がでる */}
                                {weatherData.map((entry, index) => {  //map関数<<<理解いまいち
                                    // weatherDataの各要素をentryとして受け取り、それを基に天気情報をレンダリング
                                    // indexには現在処理している配列の要素が何番目であるかが代入されている

                                    const date = new Date(entry.dt * 1000).toLocaleDateString();
                                    // entry.dt（Unixタイムスタンプ）を日付形式に変換して、表示用の日付文字列を生成

                                    // entry.dtはUnixタイムスタンプで表された日付と時刻のデータ(1970年1月1日00:00:00 UTCからの経過秒数を表す)

                                    // new Date()>>ミリ秒単位の値をもとに JavaScript の日付オブジェクトを生成

                                    // toLocaleDateString()>>>Date オブジェクトをユーザーのロケール（地域設定）に基づいた「日付の文字列」に変換

                                    const temp = entry.main.temp;
                                    // entry.main.tempから気温データを取得します。

                                    const description = entry.weather[0].description;
                                    // 天気の説明（例: 晴れ、曇りなど）を取得

                                    const iconUrl = `https://openweathermap.org/img/wn/${entry.weather[0].icon}.png`;
                                    // 天気のアイコン画像のURLを生成、entry.weather[0].iconに対応する画像が表示

                                    return ( // 普通にhtml(出力用)
                                        //<div key={entry.id} className="weather-item">  このほうほうだと警告文がでる
                                        <div key={index} className="weather-item">
                                            {/* 日付 */}
                                            <h4>{date}</h4>
                                            {/* 天気のアイコン */}
                                            <img src={iconUrl} alt={description} />
                                            <p>気温: {temp}°C</p>
                                            <p>天気: {description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <p>郵便番号を入力して天気を取得してください。</p>
                    )}
                </div>
            </div>
        </div>
    );
}
