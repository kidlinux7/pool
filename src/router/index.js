import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Poolcare from "../views/Poolcare.vue";
import Blog from "../views/Blog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
  {
    path: "/poolcare",
    name: "Poolcare",
    component: Poolcare,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
