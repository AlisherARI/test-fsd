<template>
  <div class="py-5">
    <div v-if="loading">
      <AtLoading />
    </div>
    <div v-else-if="categoryError">
      <AtAlert type="danger">{{ categoryError }}</AtAlert>
    </div>
    <div v-else>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in categoryProducts" :key="product.id">
          <ProductCard :product="product">
            <template #actions>
              <ProductDelete :id="product.id" />
            </template>
          </ProductCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getCategoryProductsRequest } from "~/entities/categories";
import { productModel } from "~/shared/models";

const route = useRoute();
const loading = ref<boolean>(true);
const categoryProducts = ref<productModel.TProduct[]>([]);
const categoryError = ref<string>();

const getCategoryProducts = () => {
  loading.value = true;
  getCategoryProductsRequest(route.params.slug as string)
    .then((response) => {
      categoryProducts.value = response.data.products;
    })
    .catch((error) => {
      categoryError.value = error;
    })
    .finally(() => {
      loading.value = false;
    });
};

getCategoryProducts();

import AtLoading from "~/shared/aliftech-ui/components/AtLoading/AtLoading.js";
import AtAlert from "~/shared/aliftech-ui/components/AtAlert/AtAlert.js";
import { ProductCard } from "~/entities/products";
import { ProductDelete } from "~/features/products";
</script>
