<template>
  <div v-if="loading">
    <AtLoading />
  </div>
  <div v-else-if="categoriesError">
    <AtAlert type="danger">{{ categoriesError }}</AtAlert>
  </div>
  <div v-else>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="(category, index) in categories" :key="index">
        <CategoryCard :category="category" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { categoriesApi } from "./api";

const loading = ref<boolean>(true);
const categories = ref<string[]>([]);
const categoriesError = ref<string>();

const getCategories = () => {
  loading.value = true;
  categoriesApi
    .getAllProductsCategoriesRequest()
    .then((response) => {
      categories.value = response.data;
    })
    .catch((error) => {
      categoriesError.value = error;
    })
    .finally(() => {
      loading.value = false;
    });
};

getCategories();

import AtLoading from "~/shared/aliftech-ui/components/AtLoading/AtLoading.js";
import AtAlert from "~/shared/aliftech-ui/components/AtAlert/AtAlert.js";
import { CategoryCard } from "~/entities/categories";
</script>
