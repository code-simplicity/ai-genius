import App from '@views/App.tsx';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
