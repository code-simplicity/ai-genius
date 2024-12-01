import '@styles/main.css';
import Analytics from '@components/Analytics';
import { routers } from '@routes';
import { ConfigProvider } from 'antd';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1DA57A',
        },
      }}
    >
      <RouterProvider router={routers} />
      <Analytics />
    </ConfigProvider>
  );
};

export default App;
