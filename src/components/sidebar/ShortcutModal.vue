<template>
  <Modal
    v-model:visible="shortcutModalVisible"
    header="键盘快捷键"
    content-class="h-[400px] select-none"
  >
    <KeyboardList />
  </Modal>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import Modal from "../common/Modal.vue"
import KeyboardList from "./components/KeyboardList.vue"
import { useModalToggleStore } from "@/stores/useModalToggleStore"

defineOptions({
  name: "ShortcutModal",
})

const store = useModalToggleStore()
const { shortcutModalVisible } = storeToRefs(store)
</script>
