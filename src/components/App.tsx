import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const todoDataUrl = 'http://localhost:3100/todos';

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse<Todo[]> = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    // TODO: eslintの解消
    void fetchData(); // eslint-disable-line no-void
  }, []);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button> {/* eslint-disable-line react/button-has-type */}
      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? '完了' : '未完了'})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
