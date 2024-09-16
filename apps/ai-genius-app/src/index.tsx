import { ChakraProvider } from '@chakra-ui/react';
import { routers } from '@routes';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={routers} />
      </ChakraProvider>
    </React.StrictMode>,
  );
}
