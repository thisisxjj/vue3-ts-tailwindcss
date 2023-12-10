<template>
  <li
    class="group h-10 w-full cursor-pointer px-3 flex items-center text-base hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)] hover:rounded-lg hover:text-[var(--color-primary-label)]"
  >
    <span
      class="flex flex-grow h-full items-center text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] dark:group-hover:text-white"
    >
      <a
        :href="link"
        class="inline-flex flex-grow text-inherit h-full items-center w-full"
      >
        {{ name }}
      </a>
    </span>
    <span
      class="opacity-0 invisible transition-opacity text-[var(--color-quaternary-label)] dark:text-[var(--dark-color-quaternary-label)] group-hover:visible group-hover:opacity-100"
    >
      <Icon icon="iconamoon:arrow-top-right-1" height="22" width="22" />
    </span>
  </li>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

interface MenuItem {
  name: string
  link: string
}
defineProps<MenuItem>()
</script>
