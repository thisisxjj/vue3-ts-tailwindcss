<template>
  <div
    :class="
      twMerge(
        cx(
          arrowButton({
            variant,
          }),
          isForbidden && 'opacity-50 cursor-not-allowed'
        )
      )
    "
  >
    <div
      class="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--material-background)] transition-all duration-300 backdrop-blur-[10px] opacity-0 text-white group-hover:opacity-100"
      @click="$emit('click')"
    >
      <Icon :icon="icon" width="16" height="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { twMerge } from "tailwind-merge"
import { Icon } from "@iconify/vue"
import { cva, cx, type VariantProps } from "class-variance-authority"

const arrowButton = cva(
  `
    absolute
    top-[50%]
    flex
    items-center
    justify-center
    z-[3]
    cursor-pointer
    transition-all
    duration-300
    p-4
  `,
  {
    variants: {
      variant: {
        left: "left-0 trans-left group-hover:translate-y-[-50%] group-hover:text-[var(--color-secondary-label)]",
        right:
          "right-0 trans-right group-hover:translate-y-[-50%] group-hover:text-[var(--color-secondary-label)]",
      },
    },
  }
)

type ArrowButtonProps = VariantProps<typeof arrowButton>

const props = withDefaults(
  defineProps<{
    variant?: ArrowButtonProps["variant"]
    isForbidden?: boolean
  }>(),
  {
    variant: "left",
    isForbidden: false,
  }
)

defineEmits<{
  click: []
}>()

const icon = computed(() =>
  props.variant === "left" ? "uiw:left" : "uiw:right"
)
</script>

<style scoped>
.trans-left {
  transform: translate(-16px, -50%);
}

.trans-right {
  transform: translate(16px, -50%);
}
</style>
