<script setup lang="ts">
import numberFormat from "@/helpers/numberFormat";
import type { IProduct } from "@/data/products";
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";

const cart = useCartStore();

const props = defineProps<{
  item: {
    id: number;
    amount: number;
    product?: IProduct;
  };
}>();

const handleAmountChange = (newAmount: number) => {
  cart.updateProductAmount(props.item.id, newAmount);
};

const amount = computed({
  get: () => props.item.amount,
  set: (value) => handleAmountChange(value),
});

const handleItemDelete = () => {
  cart.deleteProduct(props.item.id);
};
</script>

<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img
        :src="item.product?.image"
        width="120"
        height="120"
        :alt="item.product?.title"
      />
    </div>
    <h3 class="product__title">
      {{ item.product?.title }}
    </h3>
    <p class="product__info">Объем: <span>128GB</span></p>
    <span class="product__code"> Артикул: {{ item.product?.vendor }} </span>

    <div class="product__counter form__counter">
      <button
        type="button"
        aria-label="Убрать один товар"
        @click="handleAmountChange(item.amount - 1)"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>

      <input type="text" v-model.lazy.number="amount" name="count" />

      <button
        type="button"
        aria-label="Добавить один товар"
        @click="handleAmountChange(item.amount + 1)"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price">
      {{ numberFormat(item.amount * (item.product?.price || 0)) }}
      ₽
    </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
      @click="handleItemDelete"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>
