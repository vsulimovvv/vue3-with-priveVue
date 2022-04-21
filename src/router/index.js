import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import EmptyPage from "@/pages/EmptyPage";
// import AboutView from "@/views/AboutView";
// import TestView from "@/views/TestView";
// import CartView from "@/views/CartView";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "Главная", layout: "AppHeader" },
    component: HomePage,
  },
  {
    path: "/catalog",
    name: "catalog",
    meta: { title: "Каталог", layout: "AppHeader" },
    component: CatalogPage,
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "О нас", layout: "AppHeader" },
    component: CatalogPage,
  },
  {
    path: "/EmptyPage",
    name: "about",
    meta: { title: "EmptyPage" },
    component: EmptyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
