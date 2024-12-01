import { autoRoute } from '@routes/auth';
import { WelcomeRoute } from '@routes/welcome';
import WelcomePage from '@views/welcomePage';
import { createBrowserRouter } from 'react-router-dom';

/**
 * 构建路由配置
 */
export const routers = createBrowserRouter([
  {
    path: '/',
    Component: WelcomePage,
  },
  ...WelcomeRoute,
  ...autoRoute,
]);
