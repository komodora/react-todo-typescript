import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';

import App from './components/App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </StrictMode>
  );
}
