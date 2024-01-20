<template>
  <div>
    <div
      class="h-10 group text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] text-[16px] rounded-lg cursor-pointer flex items-center px-3 hover:text-[var(--color-primary-label)] hover:bg-[var(--color-active-background)] dark:hover:text-[var(--dark-color-primary-label)] dark:hover:bg-[var(--dark-color-active-background)]"
    >
      <a
        :href="href"
        target="_blank"
        class="flex items-center h-full w-full text-inherit"
      >
        {{ name }}
      </a>
      <div
        class="text-[var(--color-quaternary-label)] dark:text-[var(--dark-color-quaternary-label)] ml-auto hidden group-hover:block"
      >
        <Icon icon="system-uicons:arrow-top-right" width="24" height="24" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

defineOptions({
  name: "SiderbarLinkButton",
})

interface SiderbarLinkButtonProps {
  name: string
  href: string
}

defineProps<SiderbarLinkButtonProps>()
</script>
