<template>
  <div :class="cx('reds-modal', visible && 'reds-modal-open')">
    <i
      @click="$emit('maskClick', visible)"
      class="reds-mask"
      aria-label="弹窗遮罩"
    ></i>
    <div class="feedback-container">
      <div
        class="flex items-center justify-center font-semibold w-full p-2 h-14 border-b border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)]"
      >
        {{ header }}
        <div
          class="absolute right-2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)] hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)]"
          @click="$emit('update:visible', false)"
        >
          <Icon icon="ic:round-close" width="22" height="22" />
        </div>
      </div>
      <div
        :class="
          cx(
            'overflow-scroll w-full p-6 max-h-[calc(100vh-64px)]',
            contentClass
          )
        "
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { cx } from "class-variance-authority"

interface ModalProps {
  visible: boolean
  header: string
  contentClass?: string
}

defineProps<ModalProps>()

defineEmits<{
  maskClick: [value: boolean]
  "update:visible": [value: boolean]
}>()
</script>
