import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/CarouselComponent.vue";
import Services from "@/components/ServicesComponent.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/services", component: Services, name: "Services" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
