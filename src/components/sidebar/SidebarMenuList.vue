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

defineOptions({
  name: "SidebarMenuList",
})

const groups = ref<GroupWrapperProps[]>([
  {
    group: [
      {
        icon: "ri:arrow-right-s-line",
        name: "关于小红书",
      },
      {
        icon: "ri:arrow-right-s-line",
        name: "隐私、协议",
      },
      {
        name: "帮助与客服",
      },
    ],
  },
  {
    header: "访问方式",
    group: [
      {
        name: "键盘快捷键",
        newIcon: true,
      },
      {
        name: "添加小红书到桌面",
        newIcon: true,
      },
      {
        name: "小窗模式",
        newIcon: true,
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
      },
    ],
  },
])
</script>
