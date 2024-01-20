<template>
  <textarea
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :placeholder="placeholder"
    :type="type"
    :class="
      cx(
        `
          w-full 
          outline-none 
          resize-none 
          placeholder:text-[var(--color-quaternary-label)] 
          dark:placeholder:text-[var(--dark-color-quaternary-label)] 
          h-[92px] 
          rounded-xl 
          px-3 
          py-4 
          border 
          border-transparent 
          border-solid 
          text-[var(--color-primary-label)] 
          dark:text-[var(--dark-color-primary-label)] 
          bg-[var(--color-active-background)] 
          dark:bg-[var(--dark-color-active-background)]
        `,
        disabled && `border-[var(--color-red)]`
      )
    "
  >
  </textarea>
</template>

<script setup lang="ts">
import { cx } from "class-variance-authority"

defineOptions({
  name: "TextArea",
})

interface TextAreaProps {
  modelValue: string
  placeholder?: string
  type?: string
  disabled?: boolean
}

withDefaults(defineProps<TextAreaProps>(), {
  type: "text",
})

defineEmits<{
  "update:modelValue": [value: string | undefined]
}>()
</script>
