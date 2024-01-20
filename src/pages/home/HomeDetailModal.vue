<!-- 点击card 弹窗详情 -->
<template>
  <div
    v-show="noteDetailModalVisible || showMask"
    ref="noteContainer"
    :class="
      cx(
        'fixed left-0 top-0 w-screen h-screen flex z-20 overflow-auto transition-colors duration-[400ms]',
        showMask &&
          'bg-[var(--mask-backdrop)] dark:bg-[var(--dark-mask-backdrop)]'
      )
    "
  >
    <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <NoteDetailContainer
        v-if="noteDetailModalVisible"
        :width="containerWidth"
        :media-width="mediaWidth"
        :transform="transform"
      />
    </Transition>
    <DetailCloseButton />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { cx } from "class-variance-authority"
import DetailCloseButton from "./components/note-detail/DetailCloseButton.vue"
import NoteDetailContainer from "./components/note-detail/NoteDetailContainer.vue"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"
import { useNoteContainerObserver } from "./components/hooks/useNoteContainerObserver"
import { useNoteContainerTransition } from "./components/hooks/useNoteContainerTransition"

defineOptions({
  name: "HomeDetailModal",
})

const noteContainer = ref<HTMLDivElement | null>(null)
const store = useNoteDetailStore()
const { noteDetailModalVisible } = storeToRefs(store)

const { containerWidth, mediaWidth, transform } =
  useNoteContainerObserver(noteContainer)

const { showMask, onBeforeEnter, onEnter, onLeave } =
  useNoteContainerTransition()
</script>
