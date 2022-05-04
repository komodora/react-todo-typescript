import { useState, useEffect, FC } from 'react';
import axios, { AxiosResponse } from 'axios';

const todoDataUrl = 'http://localhost:3100/todos';

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

interface TodoTitleProps {
  title: string;
  as: string;
}

interface TodoItemProps {
  todo: Todo;
}

interface TodoListProps {
  todoList: Todo[];
}

const TodoTitle: FC<TodoTitleProps> = ({ title, as }) => {
  if (as === 'h1') return <h1>{title}</h1>;
  if (as === 'h2') return <h2>{title}</h2>;
  return <p>{title}</p>;
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => (
  <li>
    {todo.content}
    <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
    <button>削除</button>
  </li>
);

const TodoList: FC<TodoListProps> = ({ todoList }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </ul>
);

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
      <TodoTitle title="TODO進捗管理" as="h1" />
      <textarea />
      <button>+ TODOを追加</button>

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
