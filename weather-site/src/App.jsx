import React, { useState } from 'react';
import './App.css';

export default function MyApp() {
    const [Address, setAddress] = useState(""); // 郵便番号
    const [weatherData, set5daysWeather] = useState([]); // 天気データ
    const [cityName, setCity] = useState(""); // 市名
    const [ToDoList, setToDoList] = useState([[], [], [], [], []]); // 各日のToDoリスト
    const [newToDos, setNewToDos] = useState(["", "", "", "", ""]); // 新しいToDo入力欄の状態
    const [errormsg, seterrormsg] = useState([""]);
    const apiKey = import.meta.env.VITE_API_KEY;

    const ButtonClick = () => {
        const formcheck = /[^\x01-\x7E]/.test(Address);
        // .test()メソッドは、引数(Address)が手前の正規表現パターンに一致するかどうかを調べ、結果をtrueまたはfalseで返す

        if (formcheck) {
            seterrormsg('郵便番号は半角で入力してください。');
            setAddress("");
            return;
        }

        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${Address},jp&appid=${apiKey}&units=metric&lang=ja`;

        fetch(apiUrl)  // 引数に設定したURL（apiUrl）に対してHTTPリクエストを送信

            .then(response => response.json())  // fetchが成功したらresponseとして受け取りjsonに変換

            .then(data => {  // dataにはJSON形式で解析されたAPIからのレスポンスデータが格納

                // 3時間ごとのデータから1日ごとにデータを抽出
                const fivedaysforecast = data.list.filter((entry, index) => index % 8 === 0); //値も型も一致しているもの
                // const 変数名 = 3時間ごとの天気データ配列.filter((配列の現在の要素, 順番) => 条件式)

                set5daysWeather(fivedaysforecast);
                setCity(data.city.name);
                seterrormsg("");
            })

            .catch(error => {  // リクエストが失敗した場合や、JSON解析に失敗した場合など、エラーが発生した場合
                console.error("天気情報の取得に失敗しました:", error);
                seterrormsg('天気情報の取得に失敗しました');
                setAddress("");
                return;
            });
    };

    // ToDoの追加
    const AddToDo = (index) => {  // indexはどのToDOリストか判断
        const newToDo = newToDos[index];

        //ToDoの更新(配列のリストのため、前の状態のコピーが必要)
        //stateを直接変更しないようにするため、元の状態をコピーした物に変更を加えて更新する

        setToDoList(prev => {  // prev => {...} は関数の引数として直前の状態を受け取り、更新した新しい状態を返す

            const updated = [...prev];  //prev(既存の状態)を...(スプレッド構文)でコピー

            updated[index] = [...updated[index], newToDo];  //[index]番目のToDoリスト = コピーした[index]番目のToDoリストにnewToDoを追加

            return updated;  //更新された updated を返して最新の状態に
        });

        //入力欄の更新
        setNewToDos(prev => {

            const updated = [...prev]; //既存の状態をコピー

            updated[index] = ""; // 入力欄を初期化

            return updated;
        });
    };

    // ToDoの削除
    const DeleteToDo = (index, ToDoindex) => {  // 特定のToDoリストから特定の番号目の内容

        setToDoList(prev => {

            const updated = [...prev];

            updated[index] = updated[index].filter((hoge, i) => i !== ToDoindex);  //updatedに対してfilter()
            //iにはindexが入る
            //削除対象のあるリスト = 削除対象以外をフィルターで残した物に

            return updated;
        });
    };

    return (
        <div>
            <h1>天気予報サイト</h1>
            <div className="app">

                <div className="form">
                    <label htmlFor="postalCode">郵便番号:</label>
                    <input
                        name="AddressForm"
                        id='AddressInput'
                        placeholder='123-4567(半角)'
                        size="8"
                        maxLength="8"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}  // <input>のvalueの値をsetAddressの引数にして実行
                    // onChangeは変更が入るたびにイベントを発生させる
                    />
                    <button id="SearchButton" onClick={ButtonClick}>送信</button>

                    {/* 条件付きレンダリング */}
                    {errormsg && <p className="error-message">{errormsg}</p>}

                </div>

                <div id="forecast">
                    {/* 条件付きレンダリング>>weatherDataとcityNameが両方入力されていれば上*/}
                    {weatherData && cityName ? (
                        // 5日分の天気の出力
                        <div>
                            {/* 都市名の表示 */}
                            <h3>{cityName} の5日間の天気</h3>

                            <div className="weather-grid">
                                {weatherData.map((entry, index) => {
                                    const date = new Date(entry.dt * 1000).toLocaleDateString();
                                    const temp = entry.main.temp;
                                    const description = entry.weather[0].description;
                                    const iconUrl = `https://openweathermap.org/img/wn/${entry.weather[0].icon}.png`;

                                    return (
                                        <div key={index} className="weather-item">
                                            {/* 天気情報の表示 */}
                                            <h4>{date}</h4>
                                            <img src={iconUrl} alt={description} />
                                            <p>気温: {temp}°C</p>
                                            <p>天気: {description}</p>

                                            {/* ToDoリストの表示 */}
                                            <div className="todo-list">
                                                <h5>ToDoリスト</h5>
                                                <ul>
                                                    {ToDoList[index].map((todo, ToDoindex) => (
                                                        <li key={ToDoindex}>
                                                            {todo}
                                                            <button onClick={() => DeleteToDo(index, ToDoindex)}>削除</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <input
                                                    id='TodoInput'
                                                    size="12"
                                                    maxLength="7"
                                                    type="text"
                                                    value={newToDos[index]}
                                                    onChange={(e) => {
                                                        const updated = [...newToDos];
                                                        updated[index] = e.target.value;
                                                        setNewToDos(updated);
                                                    }}
                                                    placeholder="ToDoを追加"
                                                />
                                                <button onClick={() => AddToDo(index)}>追加</button>
                                            </div>
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
