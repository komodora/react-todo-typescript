import { FC, LegacyRef } from 'react';

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

export default TodoAdd;
