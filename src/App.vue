<script setup lang="ts">
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <BaseHeader />
  <RouterView />
  <BaseFooter />
</template>
