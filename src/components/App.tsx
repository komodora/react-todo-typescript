/* eslint-disable no-void */
import { FC, useRef } from 'react';

import type { ITodoTitleProps, ITodoItemProps, ITodoListProps } from '@/types/todo';
// TODO: パスエイリアスの解決
// typescriptではパスエイリアスの解決までは行わない
// webpack.config.jsで設定しないといけないが、create-react-appしており
// ここら辺の設定が隠蔽されているため、rejectするか上書き用のパッケージを導入しないといけない
import useTodo from '../hooks/useTodo';

const TodoTitle: FC<ITodoTitleProps> = ({ title, as }) => {
  if (as === 'h1') return <h1>{title}</h1>;
  if (as === 'h2') return <h2>{title}</h2>;
  return <p>{title}</p>;
};

const TodoItem: FC<ITodoItemProps> = ({ todo }) => (
  <li>
    {todo.content}
    <button>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
    <button>削除</button>
  </li>
);

const TodoList: FC<ITodoListProps> = ({ todoList }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoItem todo={todo} key={todo.id} />
    ))}
  </ul>
);

function App() {
  const { todoList, addTodoListItem } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null!);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === '') return;

    void addTodoListItem(inputEl.current.value);
    inputEl.current.value = '';
  };
  const inCompletedList = todoList.filter((todo) => !todo.done);
  const completedList = todoList.filter((todo) => todo.done);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList todoList={inCompletedList} />

      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList todoList={completedList} />
    </>
  );
}

export default App;
