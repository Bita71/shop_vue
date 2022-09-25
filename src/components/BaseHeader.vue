<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import { RouterLink } from "vue-router";
const cart = useCartStore();
</script>

<template>
  <header class="header">
    <div class="header__wrapper container">
      <RouterLink class="header__info" :to="{ name: 'home' }">
        Каталог
      </RouterLink>

      <RouterLink class="header__logo" :to="{ name: 'home' }">
        <img
          src="/img/svg/logo-tech.svg"
          alt="Логотип интернет магазина
            Технозавррр"
          width="190"
          height="33"
        />
      </RouterLink>

      <a class="header__tel" href="tel:8 800 600 90 09"> 8 800 600 90 09 </a>

      <RouterLink
        :to="{ name: 'cart' }"
        class="header__cart"
        aria-label="Корзина с
          товарами"
      >
        <svg width="30" height="21" fill="currentColor">
          <use xlink:href="#icon-cart"></use>
        </svg>
        <span class="header__count" aria-label="Количество товаров">{{
          cart.products.length
        }}</span>
      </RouterLink>
    </div>
  </header>
</template>
