<template>
  <div
    class="fixed z-[100] cursor-pointer top-8 left-8 xl:top-8 xl:left-8 lg:top-6 lg:left-6 md:top-6 md:left-6 md:block hidden"
  >
    <div
      class="flex justify-center items-center h-10 w-10 drop-filter rounded-full cursor-pointer transition-all duration-300 text-white bg-[var(--material-background)]"
      @click="handleCloseDetailModal"
    >
      <Icon icon="ic:round-close" width="22" height="22" />
    </div>
  </div>
  <div
    class="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full bg-[var(--color-background)] dark:bg-[var(--dark-color-background)] text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] sm:flex md:hidden absolute top-0 left-0 m-3 z-[5] hover:bg-[var(--color-active-background:)] dark:hover:bg-[var(--dark-color-active-background)] hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)]"
    @click="handleCloseDetailModal"
  >
    <Icon icon="ic:round-close" width="20" height="20" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { useRouter } from "vue-router"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"

defineOptions({
  name: "DetailCloseButton",
})

const { closeNoteDetailModal } = useNoteDetailStore()
const router = useRouter()

const handleCloseDetailModal = () => {
  closeNoteDetailModal()
  router.push("/explore")
}
</script>
<style>
.drop-filter {
  backdrop-filter: saturate(150%) blur(10px);
}
</style>
