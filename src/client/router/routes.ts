import { type RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    responseCode?: number;
    noPreFetchAwait?: boolean;
  }
}

type RouteRecordRawNamed = RouteRecordRaw & { name: string };

export const routes: Array<RouteRecordRawNamed> = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/page-home.vue'),
  },
  {
    name: 'catch-not-found',
    path: '/:notFoundPath(.*)*',
    redirect: (to) => ({
      name: 'not-found',
      query: {
        'not-found': encodeURIComponent(String(to.params.notFoundPath)),
      },
    }),
  },
];
