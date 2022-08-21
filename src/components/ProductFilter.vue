<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import categoriesData from "@/data/categories";
import colorsData from "@/data/colors";

const props = defineProps<{
  priceFrom: number;
  priceTo: number;
  categoryId: number;
  colorId: number;
}>();

const emit = defineEmits<{
  (e: "update:priceFrom", value: number): void;
  (e: "update:priceTo", value: number): void;
  (e: "update:categoryId", value: number): void;
  (e: "update:colorId", value: number): void;
}>();

const priceFrom = ref(props.priceFrom);
const priceTo = ref(props.priceTo);
const categoryId = ref(props.categoryId);
const colorId = ref(props.colorId);

const categories = reactive(categoriesData);
const colors = computed(() =>
  Object.keys(colorsData).map((key) => ({
    id: Number(key),
    value: colorsData[key],
  }))
);

const submit = () => {
  emit("update:priceFrom", priceFrom.value);
  emit("update:priceTo", priceTo.value);
  emit("update:categoryId", categoryId.value);
  emit("update:colorId", colorId.value);
};

const reset = () => {
  emit("update:priceFrom", 0);
  emit("update:priceTo", 0);
  emit("update:categoryId", 0);
  emit("update:colorId", 0);
};

watch(
  () => props.priceFrom,
  (value) => {
    priceFrom.value = value;
  }
);

watch(
  () => props.priceTo,
  (value) => {
    priceTo.value = value;
  }
);

watch(
  () => props.categoryId,
  (value) => {
    categoryId.value = value;
  }
);

watch(
  () => props.colorId,
  (value) => {
    colorId.value = value;
  }
);
</script>

<template>
  <aside class="filter">
    <h2 class="filter__title">Фильтры</h2>

    <form
      class="filter__form form"
      @submit.prevent="submit"
      action="#"
      method="get"
    >
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label class="form__label form__label--price">
          <input class="form__input" type="text" v-model.number="priceFrom" />
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input class="form__input" type="text" v-model.number="priceTo" />
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label class="form__label form__label--select">
          <select class="form__select" v-model.number="categoryId">
            <option value="0">Все категории</option>
            <option
              :value="category.id"
              :key="category.id"
              v-for="category in categories"
            >
              {{ category.title }}
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li class="colors__item" :key="color.id" v-for="color in colors">
            <label class="colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color"
                :value="color.id"
                v-model.number="colorId"
              />
              <span
                class="colors__value"
                :style="{ backgroundColor: color.value }"
              >
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Объемб в ГБ</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="8"
                checked="true"
              />
              <span class="check-list__desc">
                8
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="16"
              />
              <span class="check-list__desc">
                16
                <span>(461)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="32"
              />
              <span class="check-list__desc">
                32
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="64"
              />
              <span class="check-list__desc">
                64
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="128"
              />
              <span class="check-list__desc">
                128
                <span>(313)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="volume"
                value="264"
              />
              <span class="check-list__desc">
                264
                <span>(313)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button
        class="filter__reset button button--second"
        type="button"
        @click.prevent="reset"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>
