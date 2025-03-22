import '@styles/main.css';
import {ConfigProvider} from 'antd';
import React from 'react';
import {createRouter, RouterProvider} from '@tanstack/react-router';
import {routeTree} from '@routeTree.gen.ts';

/**
 * 创建路由
 */
const router = createRouter({ routeTree });

/**
 * 注册 router 实例以实现类型安全
 */
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1DA57A',
        },
      }}
    >
      <RouterProvider router={router} />
      {/*<Analytics />*/}
    </ConfigProvider>
  );
};

export default App;
