import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";

export default function App() {
  type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo
            title={todo.title}
            userId={todo.userId}
            completed={todo.completed}
          ></Todo>
        </div>
      ))}
    </div>
  );
}
