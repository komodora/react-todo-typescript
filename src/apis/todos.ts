import axios, { AxiosResponse } from 'axios';

const todoDataUrl = 'http://localhost:3100/todos';

interface Todo {
  id: string;
  content: string;
  done: boolean;
}

export const getAllTodosData = async () => {
  const response: AxiosResponse<Todo[]> = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: Todo) => {
  const response: AxiosResponse<Todo> = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}}`);
  return id;
};

export const updateTodoData = async (id: string, todo: Todo) => {
  const response: AxiosResponse<Todo> = await axios.post(`${todoDataUrl}/${id}}`, todo);
  return response.data;
};
