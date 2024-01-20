<template>
  <div>
    <Label :label="label" :required="required" :length="curLength" :max="max" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Label from "./Label.vue"

defineOptions({
  name: "FormItem",
})

interface FormItem {
  label: string
  required?: boolean
  max?: number
  curLength?: number
}

defineProps<FormItem>()
</script>
