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

  const inCompletedList = todoList.filter((todo) => !todo.done);
  const completedList = todoList.filter((todo) => todo.done);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>未完了TODOリスト</h2>
      <ul>
        {inCompletedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
      <h2>完了TODOリスト</h2>
      <ul>
        {completedList.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
