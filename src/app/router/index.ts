import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "~/pages/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("~/pages/about/AboutIndex.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("~/pages/products").then((m) => m.ProductsList),
  },
  {
    path: "/products/:id",
    name: "products-detail",
    component: () => import("~/pages/products").then((m) => m.ProductDetail),
    props: true,
  },
  {
    path: "/categories",
    name: "categories",
    component: () => import("~/pages/categories"),
  },
  {
    path: "/categories/:slug",
    name: "category-detail",
    component: () =>
      import("~/pages/categories").then((m) => m.CategoryDetailPage),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
