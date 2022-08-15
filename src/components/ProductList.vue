<script setup lang="ts">
import { defineProps } from 'vue';
import ProductItem from './ProductItem.vue';
import { IProduct } from '../data/products';

const props = defineProps<{ products: IProduct[] }>();

</script>

<template>
  <ul class="catalog__list">
    <ProductItem :product="product" :key="index" v-for="(product, index) in props.products"/>
  </ul>
</template>
