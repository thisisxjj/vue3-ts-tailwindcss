<template>
  <div class="divider"></div>
</template>

<script setup lang="ts">
defineOptions({
  name: "Divider",
})
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
