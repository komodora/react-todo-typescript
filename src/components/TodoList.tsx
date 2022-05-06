import { FC } from 'react';

import { List, As } from '@chakra-ui/react';

import type { ITodo } from '@/types/todo';
import TodoTitle from './TodoTitle';
import TodoItem from './TodoItem';

interface ITodoListProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: As;
  fontSize: object;
}

/* eslint-disable react/jsx-no-useless-fragment */
const TodoList: FC<ITodoListProps> = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
  fontSize,
}) => (
  <>
    {todoList.length !== 0 && (
      <>
        <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
        <List w="full">
          {todoList.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleTodoListItemStatus={toggleTodoListItemStatus}
              deleteTodoListItem={deleteTodoListItem}
            />
          ))}
        </List>
      </>
    )}
  </>
);

export default TodoList;
