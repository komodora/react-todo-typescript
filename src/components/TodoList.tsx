import { FC } from 'react';

import type { ITodo } from '@/types/todo';
import TodoTitle from './TodoTitle';
import TodoItem from './TodoItem';

interface ITodoListProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
}

/* eslint-disable react/jsx-no-useless-fragment */
const TodoList: FC<ITodoListProps> = ({ todoList, toggleTodoListItemStatus, deleteTodoListItem, title, as }) => (
  <>
    {todoList.length !== 0 && (
      <>
        <TodoTitle title={title} as={as} />
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
      </>
    )}
  </>
);

export default TodoList;
