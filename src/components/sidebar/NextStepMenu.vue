<!-- 点击关于小红书、隐私按钮 显示该菜单 -->
<template>
  <div
    class="flex items-center justify-center absolute w-7 h-7 top-[10px] left-2 text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)] hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)] cursor-pointer rounded-full"
    @click="handleBackClick"
  >
    <Icon icon="uiw:left" />
  </div>
  <div>
    <div
      class="flex items-center justify-center border-b border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)] text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)] h-12 px-2 py-1 text-[16px] font-semibold"
    >
      {{ sidebarMenuItem?.name }}
    </div>
    <div class="max-h-[440px] overflow-y-scroll p-1">
      <SiderbarLinkButton
        v-for="item in renderDataList"
        :key="item.name"
        :name="item.name"
        :href="item.href"
      />
      <Divider
        v-if="sidebarMenuItem?.type === SidebarMenuItemTypeEnum.About"
        :style="{ margin: '4px 8px' }"
      />
      <AppInfo v-if="sidebarMenuItem?.type === SidebarMenuItemTypeEnum.About" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, computed } from "vue"
import { Icon } from "@iconify/vue"
import SiderbarLinkButton from "../button/SiderbarLinkButton.vue"
import Divider from "../common/Divider.vue"
import AppInfo from "../common/AppInfo.vue"
import { privacyList, aboutList, cCList, bCList } from "@/utils/config"
import { GroupItem } from "../common/types"
import { sidebarMenuItemSymbol } from "./symbol"
import { SidebarMenuItemTypeEnum } from "@/types"

const sidebarMenuItem = inject<Ref<GroupItem | null>>(sidebarMenuItemSymbol)!

const handleBackClick = () => {
  sidebarMenuItem.value = null
}

const renderDataList = computed(() => {
  if (sidebarMenuItem.value?.type === SidebarMenuItemTypeEnum.About) {
    return aboutList
  }
  if (sidebarMenuItem.value?.type === SidebarMenuItemTypeEnum.Privacy) {
    return privacyList
  }
  if (sidebarMenuItem.value?.type === SidebarMenuItemTypeEnum.CreationCenter) {
    return cCList
  }

  if (
    sidebarMenuItem.value?.type === SidebarMenuItemTypeEnum.BusinessCooperation
  ) {
    return bCList
  }

  return aboutList
})
</script>
