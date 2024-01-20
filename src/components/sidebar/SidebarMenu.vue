<template>
  <div
    class="w-full bg-white dark:bg-[var(--dark-elevation-high-background)] shadow-menu-list dark:shadow-dark-menu-list rounded-xl"
  >
    <SidebarMenuList v-if="!sidebarMenuItem?.type" />
    <NextStepMenu v-else />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watchEffect } from "vue"
import SidebarMenuList from "./SidebarMenuList.vue"
import { sidebarMenuItemSymbol, sidebarMenuTypeSymbol } from "./symbol"
import { GroupItem } from "../common/types"
import NextStepMenu from "./NextStepMenu.vue"

type SidebarMenuType = "bottom" | "top"

const props = withDefaults(
  defineProps<{
    type?: SidebarMenuType
  }>(),
  {
    type: "bottom",
  }
)

const sidebarMenuItem = ref<GroupItem | null>(null)
const sidebarMenuType = ref<SidebarMenuType>(props.type)

provide(sidebarMenuItemSymbol, sidebarMenuItem)
provide(sidebarMenuTypeSymbol, sidebarMenuType)

watchEffect(() => {
  sidebarMenuType.value = props.type
})
</script>
