<template>
  <div
    class="relative h-10 xxl:w-[533.33333px] xl:w-input-xl lg:w-input-lg md:w-input-md sm:w-input-sm hidden sm:block"
  >
    <input
      class="w-full h-full p-[0_84px_0_16px] placeholder:text-[var(--color-quaternary-label)] dark:placeholder:text-[var(--dark-color-quaternary-label)] bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] outline-none rounded-full text-base text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)]"
      type="text"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      placeholder="登录探索更多内容"
      autocomplete="false"
    />
    <div class="absolute right-0 top-0 h-full flex items-center">
      <div v-if="modelValue" @click="$emit('clear')" class="icon">
        <Icon icon="material-symbols:close" width="22" height="22" />
      </div>
      <div @click="$emit('search')" class="mr-[4px] icon">
        <Icon icon="iconoir:search" width="20" height="20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({
  name: "Search",
})

defineProps(["modelValue"])
defineEmits(["update:modelValue", "clear", "search"])
</script>
