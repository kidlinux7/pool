import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Store from "../views/Store.vue";
import Poolcare from "../views/Poolcare.vue";
import Blog from "../views/Blog.vue";
import ProductDetails from "../views/ProductDetails.vue";
import BlogProfile from "../views/BlogProfile.vue";
import Checkout from "../views/Checkout.vue";

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
    path: "/productdetails/:id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
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
    path:"/blogprofile/:id",
    name:" BlogProfile",
    component: BlogProfile,
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

//Top Blue Loader
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

NProgress.configure({ trickle: true });
NProgress.configure({ easing: 'ease', speed: 500 });
NProgress.configure({ showSpinner: false });

export default router;
