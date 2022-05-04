/* eslint-disable no-void */
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';

import * as todoData from '../apis/todos';

interface Todo {
  id: string;
  content: string;
  done: boolean;
}

const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    void todoData.getAllTodosData().then((todo: Todo[]) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem!, done: !done };

    void todoData.updateTodoData(id, newTodoItem).then((updatedTodo: Todo) => {
      const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoContent: string) => {
    const newTodoItem: Todo = {
      content: todoContent,
      id: ulid(),
      done: false,
    };
    return todoData.addTodoData(newTodoItem).then((addTodo: Todo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: string) => {
    void todoData.deleteTodoData(id).then((deleteListItemId: string) => {
      const newTodoList = todoList.filter((item) => item.id !== deleteListItemId);
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};

export default useTodo;
