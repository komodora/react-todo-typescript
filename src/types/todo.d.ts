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
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}

export interface ITodoListProps {
  todoList: ITodo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
}
