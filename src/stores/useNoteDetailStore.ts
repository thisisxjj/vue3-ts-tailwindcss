import { ref } from "vue"
import { defineStore } from "pinia"
import { FeedUser } from "@/types/feeds"
import { RouterLink } from "vue-router"

export interface CurNoteType {
  id: string
  imgHeight: number
  imgWidth: number
  user: FeedUser
  cardImageRef: InstanceType<typeof RouterLink> | null
}

export const useNoteDetailStore = defineStore("note-detail", () => {
  // 笔记详情弹窗
  const noteDetailModalVisible = ref(false)
  // 点击card获取当前的note信息
  const curNote = ref<CurNoteType | null>(null)

  const showNoteDetailModal = (note: CurNoteType) => {
    noteDetailModalVisible.value = true
    curNote.value = note
  }

  const closeNoteDetailModal = () => {
    noteDetailModalVisible.value = false
    curNote.value = null
  }

  return {
    curNote,
    noteDetailModalVisible,
    showNoteDetailModal,
    closeNoteDetailModal,
  }
})
