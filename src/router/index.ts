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
    component: () => import("@/pages/home/index.vue"),
  },
  // TODO 通过id路由搜索到具体的note信息
  {
    path: "/explore/:id",
    name: "ExploreDetail",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/notification",
    name: "Notification",
    component: () => import("@/pages/Notification.vue"),
  },
  {
    path: "/user",
    name: "User",
    layout: () => import("@/pages/user/index.vue"),
    children: [
      {
        path: "profile/:id",
        name: "UserProfile",
        component: () => import("@/pages/user/profile/index.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
