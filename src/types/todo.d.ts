export interface ITodo {
  id: string;
  content: string;
  done: boolean;
}

export interface ITodoTitleProps {
  title: string;
  as: string;
}

export interface ITodoItemProps {
  todo: ITodo;
}

export interface ITodoListProps {
  todoList: ITodo[];
}
