<template>
  <div class="divider" :style="style"></div>
</template>

<script setup lang="ts">
import { StyleValue } from "vue"
defineOptions({
  name: "Divider",
})

defineProps<{
  style?: StyleValue
}>()
</script>

<style>
.divider {
  margin: 0 12px;
  list-style: none;
  height: 0;
  border-width: 1px 0 0;
  @apply border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)];
}
</style>
