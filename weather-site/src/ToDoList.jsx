import React, { useState } from 'react';
import './Css/ToDoList.css';

export default function ToDoList({ dayIndex, toDoList, setToDoList }) {
    const [newToDo, setNewToDo] = useState("");

    //ToDoの更新(配列のリストのため、前の状態のコピーが必要)
    //stateを直接変更しないようにするため、元の状態をprevでコピーした物に変更を加えて更新する

    const addToDo = () => {
        setToDoList((prev) => {
            const updated = [...prev];  // 既存の状態をコピー
            updated[dayIndex] = [...updated[dayIndex], newToDo];  // 新しいToDoを追加
            return updated;
        });
        setNewToDo("");
    };

    const deleteToDo = (toDoIndex) => {
        setToDoList((prev) => {
            const updated = [...prev];
            updated[dayIndex] = updated[dayIndex].filter((_, i) => i !== toDoIndex);  // 削除対象以外をフィルターで抽出
            return updated;
        });
    };

    return (
        <div className="todo-list">
            <h5>ToDoリスト</h5>
            <ul>
                {toDoList[dayIndex].map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteToDo(index)}>削除</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newToDo}
                onChange={(e) => setNewToDo(e.target.value)}
                placeholder="ToDoを追加"
            />
            <button id="ToDoButton" onClick={addToDo}>追加</button>
        </div>
    );
}
