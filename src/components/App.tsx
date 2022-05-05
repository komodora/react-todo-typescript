/* eslint-disable no-void */
import { useRef } from 'react';

// TODO: パスエイリアスの解決
// typescriptではパスエイリアスの解決までは行わない
// webpack.config.jsで設定しないといけないが、create-react-appしており
// ここら辺の設定が隠蔽されているため、rejectするか上書き用のパッケージを導入しないといけない
import useTodo from '../hooks/useTodo';

import TodoTitle from './TodoTitle';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

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

      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
      />

      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
}

export default App;
