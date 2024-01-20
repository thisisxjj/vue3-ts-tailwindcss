<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    class="outline-none border-none appearance-none placeholder:text-[var(--color-quaternary-label)] dark:placeholder:text-[var(--dark-color-quaternary-label)] w-full h-10 rounded-full bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)] px-4"
  />
</template>

<script setup lang="ts">
interface InputProps {
  placeholder?: string
  modelValue: string
}

defineProps<InputProps>()

defineEmits<{
  "update:modelValue": [val: string]
}>()
</script>
