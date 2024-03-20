<template>
  <div>
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter: letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 md:p-8">
      <MenuItem
        v-for="meal of meals"
        :key="meal.idMeal"
        :meal="meal"
        class="bg-white shadow rounded-xl"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MenuItem from "../components/MealItem.vue";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);
const route = useRoute();

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style></style>
