<template>
  <div
    :class="
      cx(
        `h-10 flex justify-center items-center px-4 cursor-pointer select-none hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)] hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)] hover:rounded-full`,
        active &&
          `
          text-[var(--color-primary-label)] 
          dark:text-[var(--dark-color-primary-label)] 
          bg-[var(--color-active-background)] 
          dark:bg-[var(--dark-color-active-background)] 
          rounded-full
          font-semibold
        `
      )
    "
    @click="$emit('click', type)"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { cx } from "class-variance-authority"

defineOptions({
  name: "ChannelItem",
})

interface ChannelItemProps {
  title: string
  type: number
  active?: boolean
}

defineProps<ChannelItemProps>()

defineEmits<{
  click: [type: number]
}>()
</script>
