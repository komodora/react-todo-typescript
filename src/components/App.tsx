/* eslint-disable no-void */
import { FC, useRef, LegacyRef } from 'react';

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

const TodoItem: FC<ITodoItemProps> = ({ todo, toggleTodoListItemStatus, deleteTodoListItem }) => {
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>{todo.done ? '未完了リストへ' : '完了リストへ'}</button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};

const TodoList: FC<ITodoListProps> = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    ))}
  </ul>
);

interface ITodoAddProps {
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}

const TodoAdd: FC<ITodoAddProps> = ({ inputEl, handleAddTodoListItem }) => (
  <>
    <textarea ref={inputEl} />
    <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
  </>
);

function App() {
  const { todoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItem } = useTodo();

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
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />

      <TodoTitle title="未完了TODOリスト" as="h2" />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />

      <TodoTitle title="完了TODOリスト" as="h2" />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
      />
    </>
  );
}

export default App;
