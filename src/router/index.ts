import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  routes,
})

export default router
