<template>
  <div
    class="inline-block w-full text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)] text-[16px] absolute bottom-0"
  >
    <div v-if="showMenu" class="absolute bottom-[72px] w-full z-[16]">
      <SidebarMenu />
    </div>
    <MoreInfoButton @click="handleShowMoreInfoClck" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import MoreInfoButton from "@/components/button/MoreInfoButton.vue"
import SidebarMenu from "./SidebarMenu.vue"

const showMenu = ref(false)
const handleShowMoreInfoClck = () => {
  showMenu.value = !showMenu.value
}
</script>
