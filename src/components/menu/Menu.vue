<template>
  <div class="flex">
    <div class="md:block hidden">
      <MenuButton :list="cCList">创作中心</MenuButton>
      <MenuButton :list="bCList">业务合作</MenuButton>
    </div>
    <div class="md:hidden block relative">
      <button @click="toggleSidebarMenu" class="icon-button">
        <Icon icon="gg:menu" width="20" height="20" />
      </button>
      <div
        v-if="sidebarMenuVisible"
        class="absolute right-0 w-[223px] mt-1 z-[16]"
      >
        <SidebarMenu type="top" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { storeToRefs } from "pinia"
import MenuButton from "./MenuButton.vue"
import SidebarMenu from "../sidebar/SidebarMenu.vue"
import { useModalToggleStore } from "@/stores/useModalToggleStore"
import { cCList, bCList } from "@/utils/config"

defineOptions({
  name: "Menu",
})

const store = useModalToggleStore()
const { sidebarMenuVisible } = storeToRefs(store)
const { toggleSidebarMenu } = store
</script>
