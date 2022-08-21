<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  page: number;
  count: number;
  perPage: number;
}>();

const emit = defineEmits<{ (event: "paginate", page: number): void }>();

const pages = computed(() => Math.ceil(props.count / props.perPage));

const paginate = (page: number) => emit("paginate", page);
</script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow pagination__link--disabled"
        aria-label="Предыдущая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" :key="pageNumber" v-for="pageNumber in pages">
      <a
        class="pagination__link"
        href="#"
        :class="{ 'pagination__link--current': pageNumber === page }"
        @click.prevent="paginate(pageNumber)"
      >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>
