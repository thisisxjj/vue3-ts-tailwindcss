import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/explore",
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("@/pages/Notification.vue"),
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
