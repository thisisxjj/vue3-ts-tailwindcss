import { ref } from "vue"
import { defineStore } from "pinia"

export const useModalToggleStore = defineStore("modal-toggle", () => {
  // 快捷键弹窗显隐
  const shortcutModalVisible = ref(false)
  // side bar 菜单显隐
  const sidebarMenuVisible = ref(false)
  // 帮助与客服显隐
  const helpModalVisible = ref(false)

  const showShortcutModal = () => (shortcutModalVisible.value = true)

  const closeShortcutModal = () => (shortcutModalVisible.value = false)

  const toggleSidebarMenu = () =>
    (sidebarMenuVisible.value = !sidebarMenuVisible.value)

  const closeSidebarMenu = () => (sidebarMenuVisible.value = false)

  const showHelpModal = () => (helpModalVisible.value = true)

  const closeHelpModal = () => (helpModalVisible.value = false)

  return {
    shortcutModalVisible,
    helpModalVisible,
    sidebarMenuVisible,
    showShortcutModal,
    closeShortcutModal,
    toggleSidebarMenu,
    closeSidebarMenu,
    showHelpModal,
    closeHelpModal,
  }
})
