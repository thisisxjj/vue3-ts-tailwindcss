<template>
  <div v-for="({ group, header }, index) in groups">
    <GroupWrapper
      :header="header"
      :group="group"
      :divider="index !== groups.length - 1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, inject, Ref, watch } from "vue"
import type { GroupWrapperProps } from "@/components/common/types.ts"
import GroupWrapper from "@/components/common/GroupWrapper.vue"
import {
  sideBarAboutGroup,
  sideBarCooperateGroup,
  sidebarAccessGroup,
  sidebarSettingGroup,
} from "@/utils/config"
import { sidebarMenuTypeSymbol } from "./symbol"

const sidebarMenuType = inject<Ref<"bottom" | "top">>(sidebarMenuTypeSymbol)!

defineOptions({
  name: "SidebarMenuList",
})

const groups = ref<GroupWrapperProps[]>([])

watch(
  () => sidebarMenuType.value,
  () => {
    if (sidebarMenuType.value === "bottom") {
      groups.value.push(
        sideBarAboutGroup(false),
        sidebarAccessGroup,
        sidebarSettingGroup
      )
    } else {
      groups.value.push(
        sidebarSettingGroup,
        sidebarAccessGroup,
        sideBarCooperateGroup,
        sideBarAboutGroup(true)
      )
    }
  },
  {
    immediate: true,
  }
)
</script>
