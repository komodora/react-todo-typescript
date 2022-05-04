/* eslint-disable no-void */
import { useEffect, useState } from 'react';
import { ulid } from 'ulid';

import type { ITodo } from '@/types/todo';
import * as todoData from '@/apis/todos';

const useTodo = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    void todoData.getAllTodosData().then((todo: ITodo[]) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem!, done: !done };

    void todoData.updateTodoData(id, newTodoItem).then((updatedTodo: ITodo) => {
      const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoContent: string) => {
    const newTodoItem: ITodo = {
      content: todoContent,
      id: ulid(),
      done: false,
    };
    return todoData.addTodoData(newTodoItem).then((addTodo: ITodo) => {
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
