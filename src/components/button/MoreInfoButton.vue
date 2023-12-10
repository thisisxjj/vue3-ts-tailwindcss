<template>
  <div
    class="select-none cursor-pointer relative mb-5 h-12 w-full flex font-semibold items-center rounded-full hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)]"
    @click="$emit('click', $event)"
  >
    <Icon
      class="mr-3 ml-4 inline-block align-middle"
      icon="gg:menu"
      width="24"
      height="24"
    />
    更多
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({
  name: "MoreInfoButton",
})
defineEmits(["click"])
</script>
