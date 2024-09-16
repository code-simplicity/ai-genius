import { autoRoute } from '@routes/auth';
import App from '@views/App.tsx';
import { createBrowserRouter } from 'react-router-dom';

/**
 * 构建路由配置
 */
export const routers = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  ...autoRoute,
]);
