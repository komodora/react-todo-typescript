import axios, { AxiosResponse } from 'axios';

import type { ITodo } from '@/types/todo';

const todoDataUrl = 'http://localhost:3100/todos';

export const getAllTodosData = async () => {
  const response: AxiosResponse<ITodo[]> = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: ITodo) => {
  const response: AxiosResponse<ITodo> = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}}`);
  return id;
};

export const updateTodoData = async (id: string, todo: ITodo) => {
  const response: AxiosResponse<ITodo> = await axios.post(`${todoDataUrl}/${id}}`, todo);
  return response.data;
};
