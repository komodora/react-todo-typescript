import { FC, LegacyRef, ReactElement } from 'react';

import { Textarea, Button } from '@chakra-ui/react';

interface ITodoAddProps {
  placeholder: string;
  leftIcon: ReactElement;
  buttonText: string;
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
}

const TodoAdd: FC<ITodoAddProps> = ({ placeholder, leftIcon, buttonText, inputEl, handleAddTodoListItem }) => (
  <>
    <Textarea placeholder={placeholder} bgColor="white" mt="8" borderColor="gray.400" ref={inputEl} />
    <Button onClick={handleAddTodoListItem} colorScheme="blue" leftIcon={leftIcon} mt="8">
      {buttonText}
    </Button>
  </>
);

export default TodoAdd;
