<script setup lang="ts">
import numberFormat from "@/helpers/numberFormat";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import CartItem from "../components/CartItem.vue";
const cart = useCartStore();
const products = computed(() => cart.cartDetailsProducts);
</script>

<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <RouterLink class="breadcrumbs__link" :to="{ name: 'home' }">
            Каталог
          </RouterLink>
        </li>
        <li class="breadcrumbs__item">
          <span class="breadcrumbs__link"> Корзина </span>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> {{ products.length }} товара </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem
              :item="product"
              :key="product.id"
              v-for="product in products"
            />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ numberFormat(cart.cartTotalPrice) }} ₽</span>
          </p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
