import { FC } from 'react';

import { Heading, As } from '@chakra-ui/react';

// TODO: エラーの解消
/* eslint-disable */
interface ITodoTitleProps {
  title: string;
  as: As;
  fontSize: object;
  mt?: any;
}

const TodoTitle: FC<ITodoTitleProps> = ({ title, as, fontSize, mt = '4' }) => (
  <Heading mt={mt} as={as} fontSize={fontSize} w="full">
    {title}
  </Heading>
);

export default TodoTitle;
