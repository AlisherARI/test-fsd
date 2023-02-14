<template>
  <router-link :to="{ name: 'category-detail', params: { slug: category } }">
    <AtPanel class="hover:scale-105 transition duration-150 hover:shadow-lg">
      <h5 class="font-semibold">{{ category }}</h5>
    </AtPanel>
  </router-link>
</template>

<script setup lang="ts">
import AtPanel from "~/shared/aliftech-ui/components/AtPanel/AtPanel.js";
import { defineProps } from "vue";

defineProps<{
  category: string;
}>();
</script>
