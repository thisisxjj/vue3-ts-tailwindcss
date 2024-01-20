<template>
  <RouterLink
    :to="`/user/profile/${userId}`"
    target="_blank"
    class="text-[var(--color-link)] dark:text-[var(--dark-color-link)]"
    >{{ link }}</RouterLink
  >
</template>

<script setup lang="ts">
defineOptions({
  name: "AtLink",
})

defineProps<{
  link: string
  userId?: string
}>()
</script>
