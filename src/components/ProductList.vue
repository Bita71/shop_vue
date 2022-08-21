<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import type { IProduct } from "../data/products";

const props = defineProps<{ products: IProduct[] }>();
</script>

<template>
  <ul class="catalog__list">
    <ProductItem
      :product="product"
      :key="product.id"
      v-for="product in props.products"
    />
  </ul>
</template>
