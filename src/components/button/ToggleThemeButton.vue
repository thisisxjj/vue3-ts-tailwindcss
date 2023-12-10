<template>
  <div
    class="ml-auto relative bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] p-[2px] rounded-full cursor-pointer"
  >
    <button class="theme-button">
      <div class="icon-wrapper">
        <Icon icon="lucide:settings-2" width="14" height="14" />
      </div>
    </button>
    <button class="theme-button active">
      <div class="icon-wrapper">
        <Icon icon="ph:sun" width="14" height="14" />
      </div>
    </button>
    <button class="theme-button">
      <div class="icon-wrapper">
        <Icon icon="ph:moon-light" width="14" height="14" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
</script>

<style scoped>
.theme-button {
  @apply rounded-full bg-transparent text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] hover:text-[var(--color-primary-label)] dark:hover:text-white;
}

.icon-wrapper {
  @apply w-6 h-6 flex items-center justify-center cursor-pointer;
}

.active {
  @apply bg-white dark:bg-[var(--dark-elevation-low-background)] shadow-custom text-[var(--color-primary-label)] dark:text-white;
}

.shadow-custom {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02);
}
</style>
