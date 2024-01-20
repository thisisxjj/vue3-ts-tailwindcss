<template>
  <div class="p-1">
    <div
      v-if="!!header"
      class="flex items-center px-3 font-normal h-8 text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] text-[12px]"
    >
      {{ header }}
    </div>
    <template v-for="item in group" :key="item.name">
      <MoreInfoMenuButton
        v-if="item.type !== 'LOGOUT' || isLogin"
        :name="item.name"
        :icon="item.icon"
        :new-icon="item.newIcon"
        :custom="item.custom"
        :type="item.type"
        @custome-click="handleMenuButtonClick(item)"
      >
      </MoreInfoMenuButton>
    </template>
  </div>
  <Divider v-if="divider" />
</template>

<script setup lang="ts">
import { ref, inject, Ref } from "vue"
import { GroupItem, GroupWrapperProps } from "./types.ts"
import MoreInfoMenuButton from "../button/MoreInfoMenuButton.vue"
import Divider from "./Divider.vue"
import { useModalToggleStore } from "@/stores/useModalToggleStore"
import { sidebarMenuItemSymbol } from "../sidebar/symbol"
import { SidebarMenuItemTypeEnum } from "@/types"

defineOptions({
  name: "GroupWrapper",
})

defineProps<GroupWrapperProps>()

const sidebarMenuItem = inject<Ref<GroupItem>>(sidebarMenuItemSymbol)!

const { showShortcutModal, showHelpModal, closeSidebarMenu } =
  useModalToggleStore()

const handleMenuButtonClick = (item: GroupItem) => {
  if (!item.type) return

  switch (item.type) {
    case SidebarMenuItemTypeEnum.About:
    case SidebarMenuItemTypeEnum.Privacy:
    case SidebarMenuItemTypeEnum.CreationCenter:
    case SidebarMenuItemTypeEnum.BusinessCooperation:
      sidebarMenuItem.value = item
      break
    case SidebarMenuItemTypeEnum.Shortcut:
      showShortcutModal()
      closeSidebarMenu()
      break
    case SidebarMenuItemTypeEnum.Help:
      showHelpModal()
      closeSidebarMenu()
      break
    case SidebarMenuItemTypeEnum.AddToDesk:
      break
    case SidebarMenuItemTypeEnum.SmallWindow:
      window.open("https://www.xiaohongshu.com/explore?mini=1", "_blank")
      closeSidebarMenu()
      break
    default:
      break
  }
}
const isLogin = ref(false)
</script>
