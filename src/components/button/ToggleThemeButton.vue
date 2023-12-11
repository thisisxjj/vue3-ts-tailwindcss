<template>
  <div
    class="ml-auto relative bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] p-[2px] rounded-full cursor-pointer"
  >
    <button
      v-for="{ icon, id, type } in themeArr"
      :key="id"
      :class="cx('theme-button', type === themeType && 'active')"
      @click="handleChangeThemeClick(type)"
    >
      <div class="icon-wrapper">
        <Icon :icon="icon" width="14" height="14" />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { Icon } from "@iconify/vue"
import { cx } from "class-variance-authority"
import { useThemeStore } from "@/stores/useThemeStore"

// 定义当前主题列表
const themeArr = [
  {
    id: 0,
    type: "system",
    icon: "lucide:settings-2",
    name: "跟随系统",
  },
  {
    id: 1,
    type: "light",
    icon: "ph:sun",
    name: "浅色模式",
  },
  {
    id: 2,
    type: "dark",
    icon: "ph:moon-light",
    name: "深色模式",
  },
]

const store = useThemeStore()

const { themeType } = storeToRefs(store)
const { changeTheme } = store

const handleChangeThemeClick = (newThemeType: string) => {
  changeTheme(newThemeType)
}
</script>

<style scoped>
.theme-button {
  @apply rounded-full bg-transparent text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] hover:text-[var(--color-primary-label)] dark:hover:text-white;
}

.icon-wrapper {
  @apply w-6 h-6 flex items-center justify-center cursor-pointer;
}

.active {
  @apply bg-white dark:bg-[var(--dark-elevation-low-background)] shadow-theme-button dark:shadow-dark-theme-button text-[var(--color-primary-label)] dark:text-white;
}
</style>
