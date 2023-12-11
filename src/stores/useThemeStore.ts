import { ThemeType } from "@/types"
import { defineStore } from "pinia"
import { ref } from "vue"

let isFirstLoad = false
const deaultTheme: ThemeType = "system"
const storageKey = "xhs-pc-theme"

export const useThemeStore = defineStore("theme", () => {
  if (!isFirstLoad) {
    isFirstLoad = true
    localStorage.setItem(storageKey, deaultTheme)
  }

  const storageTheme = localStorage.getItem(storageKey) || deaultTheme
  const themeType = ref<ThemeType>(storageTheme as ThemeType)

  const changeTheme = (newTheme: ThemeType) => {
    themeType.value = newTheme
  }

  return {
    themeType,
    changeTheme,
  }
})
