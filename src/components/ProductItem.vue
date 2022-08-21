<script setup lang="ts">
import colorsData from "@/data/colors";
import { reactive, ref } from "vue";
import type { IProduct } from "../data/products";

const props = defineProps<{ product: IProduct }>();
const color = ref(props.product.colorsId[0]);
const colors = reactive(colorsData);
</script>

<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="props.product.image" :alt="props.product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">{{ props.product.title }}</a>
    </h3>

    <span class="catalog__price"> {{ props.product.price }} ₽ </span>

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
