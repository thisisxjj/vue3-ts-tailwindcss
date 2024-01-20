<template>
  <div
    class="inline-block w-full text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)] text-[16px] absolute bottom-0"
  >
    <div v-if="sidebarMenuVisible" class="absolute bottom-[72px] w-full z-[16]">
      <SidebarMenu />
    </div>
    <MoreInfoButton @click="toggleSidebarMenu" />
  </div>
</template>

<script setup lang="ts">
import MoreInfoButton from "@/components/button/MoreInfoButton.vue"
import SidebarMenu from "./SidebarMenu.vue"
import { useModalToggleStore } from "@/stores/useModalToggleStore"
import { storeToRefs } from "pinia"

const store = useModalToggleStore()
const { sidebarMenuVisible } = storeToRefs(store)
const { toggleSidebarMenu } = store
</script>
