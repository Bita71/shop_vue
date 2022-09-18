<script setup lang="ts">
import { computed, ref } from "vue";
import data from "../data/products";
import ProductList from "../components/ProductList.vue";
import BasePagination from "../components/BasePagination.vue";
import ProductFilter from "../components/ProductFilter.vue";

const props = defineProps<{ category: number }>();

const filterPriceFrom = ref(0);
const filterPriceTo = ref(Math.max(...data.map((item) => item.price)));
const filterCategoryId = ref(Number(props.category) || 0);
const filterColorId = ref(0);

const page = ref(1);
const productsPerPage = ref(3);

const filteredProducts = computed(() =>
  data.filter(
    (product) =>
      product.price >= filterPriceFrom.value &&
      product.price <= filterPriceTo.value &&
      (filterCategoryId.value === 0 ||
        filterCategoryId.value === product.categoryId) &&
      (filterColorId.value === 0 ||
        product.colorsId.includes(filterColorId.value))
  )
);

const products = computed(() => {
  const offset = (page.value - 1) * productsPerPage.value;
  return filteredProducts.value.slice(offset, offset + productsPerPage.value);
});

const countProducts = computed(() => filteredProducts.value.length);

const paginate = (pageNumber: number) => {
  page.value = pageNumber;
};
</script>

<template>
  <main>
    <main class="content container">
      <div class="content__top content__top--catalog">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> {{ countProducts }} товара </span>
      </div>

      <div class="content__catalog">
        <ProductFilter
          v-model:price-from="filterPriceFrom"
          v-model:price-to="filterPriceTo"
          v-model:color-id="filterColorId"
          v-model:category-id="filterCategoryId"
        />
        <section class="catalog">
          <ProductList :products="products" />

          <BasePagination
            :page="page"
            :per-page="productsPerPage"
            :count="countProducts"
            @paginate="paginate"
          />
        </section>
      </div>
    </main>
  </main>
</template>
