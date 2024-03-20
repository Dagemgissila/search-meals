<template>
  <div class="bg-white">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-52 object-cover"
      />
    </router-link>
    <h3 class="p-3 font-bold">{{ meal.strMeal }}</h3>

    <div class="p-3">
      <a
        href="/"
        target="_blank"
        class="px-3 py-2 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
      >
        YouTube
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>
