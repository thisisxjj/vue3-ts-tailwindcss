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
import { ref } from "vue"
import type { GroupWrapperProps } from "@/components/common/types.ts"
import GroupWrapper from "@/components/common/GroupWrapper.vue"
import { SidebarMenuItemTypeEnum } from "@/types"

defineOptions({
  name: "SidebarMenuList",
})

const groups = ref<GroupWrapperProps[]>([
  {
    group: [
      {
        icon: "ri:arrow-right-s-line",
        name: "关于小红书",
        type: SidebarMenuItemTypeEnum.About,
      },
      {
        icon: "ri:arrow-right-s-line",
        name: "隐私、协议",
        type: SidebarMenuItemTypeEnum.Privacy,
      },
      {
        name: "帮助与客服",
        type: SidebarMenuItemTypeEnum.Help,
      },
    ],
  },
  {
    header: "访问方式",
    group: [
      {
        name: "键盘快捷键",
        newIcon: true,
        type: SidebarMenuItemTypeEnum.Shortcut,
      },
      {
        name: "添加小红书到桌面",
        newIcon: true,
        type: SidebarMenuItemTypeEnum.AddToDesk,
      },
      {
        name: "小窗模式",
        newIcon: true,
        type: SidebarMenuItemTypeEnum.SmallWindow,
      },
    ],
  },
  {
    header: "设置",
    group: [
      {
        name: "深色模式",
        custom: true,
      },
      {
        name: "退出登录",
        type: SidebarMenuItemTypeEnum.Logout,
      },
    ],
  },
])
</script>
