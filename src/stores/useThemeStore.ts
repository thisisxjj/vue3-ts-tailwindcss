import { ThemeType } from "@/types"
import { defineStore } from "pinia"
import { ref } from "vue"

let isFirstLoad = false
const deaultTheme: ThemeType = "system"
const storageKey = "xhs-pc-theme"

export const useThemeStore = defineStore("theme", () => {
  const localStorageTheme = localStorage.getItem(storageKey)
  if (!isFirstLoad && !localStorageTheme) {
    isFirstLoad = true
    localStorage.setItem(storageKey, deaultTheme)
  }

  const storageTheme = localStorageTheme
  const themeType = ref<ThemeType>(storageTheme as ThemeType)

  const changeTheme = (newTheme: ThemeType) => {
    themeType.value = newTheme
    localStorage.setItem(storageKey, newTheme)
  }

  return {
    themeType,
    changeTheme,
  }
})
