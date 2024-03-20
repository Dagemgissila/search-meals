import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import MealList from "../view/MealList.vue";
import MealsByName from "../view/MealsByName.vue";
import MealsByLetter from "../view/MealsByLetter.vue";
import MealsByIngredients from "../view/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealsDetail from "../view/MealsDetail.vue";
import Ingredients from "../view/Ingredients.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIngredients,
      },
      {
        path: "ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealsDetail,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
