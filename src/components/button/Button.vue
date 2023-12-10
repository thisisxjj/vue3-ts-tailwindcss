<template>
  <button
    :class="
      cx(
        twMerge(
          button({
            variant,
            size,
          })
        ),
        className
      )
    "
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import {
  cva,
  cx,
  type VariantProps,
} from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const button = cva(
  `
    relative
    cursor-pointer
    select-none
    whitespace-nowrap
    outline-none
    bg-none
    border-none
    align-middle
    text-center
    inline-block
    p-0
    rounded-[100px]
    font-medium
  `,
  {
    variants: {
      variant: {
        primary:
          "bg-[#ff2e4d] text-white",
        secondary:
          "bg-white text-[var(--color-primary-label)]",
      },
      size: {
        small:
          "text-[14px] leading-[18px] px-4 h-6",
        medium:
          "text-[14px] leading-[18px] px-5 h-9",
        large:
          "text-[16px] leading-4 px-6 font-semibold h-10",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "medium",
      },
    ],
  }
)

type ButtonProps =
  VariantProps<typeof button>

withDefaults(
  defineProps<{
    variant: ButtonProps["variant"]
    size: ButtonProps["size"]
    className: string
  }>(),
  {
    variant: "primary",
    size: "medium",
  }
)
</script>
