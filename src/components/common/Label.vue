<template>
  <label
    class="text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] text-[14px] font-medium mb-2 w-full px-1 flex items-center"
  >
    {{ label }}
    <span v-if="required" class="ml-1 text-[var(--color-red)]">*</span>
    <span v-if="max || length" class="ml-auto">
      <span :class="cx(length! > max! && 'text-[var(--color-red)]')">
        {{ length }}
      </span>
      / {{ max }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { cx } from "class-variance-authority"
interface LabelProps {
  label: string
  required?: boolean
  max?: number
  length?: number
}

defineProps<LabelProps>()
</script>
