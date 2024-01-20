<template>
  <a
    class="cursor-pointer mr-[2px] dark:text-[var(--dark-color-link)] text-[var(--color-link)]"
    target="_blank"
    :href="`/search_result/?keyword=${topic}`"
  >
    {{ `#${topic}` }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  topic: string
}>()
</script>
