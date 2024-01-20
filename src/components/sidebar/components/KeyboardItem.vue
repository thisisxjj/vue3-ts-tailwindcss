<template>
  <div
    :class="cx('flex justify-between', !isFirst && 'mt-3', !isLast && 'mb-3')"
  >
    <span
      class="flex items-center text-[16px] text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)]"
    >
      {{ desc }}
    </span>
    <span class="flex">
      <template :key="item.key" v-for="(item, index) in keys">
        <span
          :class="
            cx(
              'bg-[var(--color-primary-label)] dark:bg-[var(--dark-color-primary-label)] text-white dark:text-[var(--dark-color-background)] h-6 min-w-[24px] leading-6 inline-block px-2 rounded text-[12px] font-medium',
              item.square && 'w-6 flex justify-center p-0'
            )
          "
        >
          {{ item.key }}
        </span>
        <span
          class="h-6 w-6 flex items-center justify-center text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)]"
          v-if="index !== keys.length - 1"
        >
          <Icon icon="iconoir:plus" height="16" width="16" />
        </span>
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { cx } from "class-variance-authority"

defineOptions({
  name: "KeyboardItem",
})

interface KeyItem {
  key: string
  square: boolean
}

defineProps<{
  desc: string
  keys: KeyItem[]
  isFirst: boolean
  isLast: boolean
}>()
</script>
