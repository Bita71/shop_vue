<script setup lang="ts">
import colorsData from "@/data/colors";
import { RouterLink } from "vue-router";
import { reactive, ref, computed } from "vue";
import type { IProduct } from "../data/products";
import numberFormat from "@/helpers/numberFormat";

const props = defineProps<{ product: IProduct }>();
const color = ref(props.product.colorsId[0]);
const colors = reactive(colorsData);

const price = computed(() => numberFormat(props.product.price));
</script>

<template>
  <li class="catalog__item">
    <RouterLink
      class="catalog__pic"
      :to="{
        name: 'product',
        params: {
          id: props.product.id,
        },
      }"
    >
      <img :src="props.product.image" :alt="props.product.title" />
    </RouterLink>

    <h3 class="catalog__title">
      <RouterLink :to="'/product/' + props.product.id">{{
        props.product.title
      }}</RouterLink>
    </h3>

    <span class="catalog__price"> {{ price }} ₽ </span>

    <ul class="colors colors--black">
      <li
        class="colors__item"
        :key="colorId"
        v-for="colorId in props.product.colorsId"
      >
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="colorId"
            v-model="color"
          />
          <span
            class="colors__value"
            :style="{ backgroundColor: colors[colorId] }"
          >
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>
