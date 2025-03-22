import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import type { RouterContextType } from '@types';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import React from 'react';
import NotFound from '@views/notFound';

export const Route = createRootRouteWithContext<RouterContextType>()({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/auth"
          activeProps={{
            className: 'font-bold',
          }}
        >
          auth
        </Link>
        <Link
          to="/welcome"
          activeProps={{
            className: 'font-bold',
          }}
        >
          welcome
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
