import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/layouts/HomePage.vue";
import RecipesList from "./components/categories/RecipesList.vue";
import MealsList from "./components/meals/MealsList.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage,
        },
        {
            path: "/categories",
            component: RecipesList,
        },
        {
            path: "/categories/:categoryId",
            component: MealsList,
        },
    ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
