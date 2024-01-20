<template>
  <div class="flex justify-center absolute bottom-9 w-full">
    <div
      class="hover:backdrop-blur-md hover:bg-[var(--material-background)] h-6 z-[2] flex justify-center items-center absolute px-[6px] rounded-full transition-all duration-150 ease-out"
    >
      <div
        :key="index"
        v-for="(_, index) in numList"
        class="h-full cursor-pointer flex justify-center items-center"
        @click="$emit('select', index)"
      >
        <div
          :class="
            twMerge(
              cx(
                'w-[6px] h-[6px] mx-[3px] rounded-[6px] bg-white opacity-50 filters transition-colors duration-300',
                curIndex === index && 'opacity-100 bg-white'
              )
            )
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cx } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { computed } from "vue"

defineOptions({
  name: "SliderDots",
})

const props = defineProps<{
  num: number
  curIndex: number
}>()

defineEmits<{
  select: [index: number]
}>()

const numList = computed(() => Array(props.num).fill(1))
</script>

<style scoped>
.filters {
  filter: drop-shadow(0 1px 4px var(--mask-backdrop));
}
</style>
