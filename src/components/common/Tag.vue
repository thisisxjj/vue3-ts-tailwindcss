<template>
  <div
    class="bg-[var(--color-blue)] flex items-center justify-center px-2 min-w-[32px] h-6 rounded-full"
  >
    <span class="text-white font-medium leading-[120%] text-[12px]">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "Tag",
})
</script>
