import App from '@App.tsx';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
