<template>
  <div
    class="h-8 flex items-center justify-center text-[12px] text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
  >
    <div class="mr-1">
      <Icon icon="eos-icons:bubble-loading" />
    </div>
    加载中
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({
  name: "CommentLoading",
})
</script>
