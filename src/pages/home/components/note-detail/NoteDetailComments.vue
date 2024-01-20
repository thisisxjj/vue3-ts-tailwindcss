<template>
  <div class="relative">
    <div class="lg:px-3 lg:py-4 xl:p-4 px-2 py-4">
      <div
        class="text-[14px] text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] ml-2 mb-3"
      >
        {{ `共 ${total} 条评论` }}
      </div>
      <CommentList :list="commentsList" type="parent" />
      <CommentLoading v-if="loading" />
      <div
        v-if="!loading && !hasMore"
        class="flex justify-center mt-6 mb-6 text-[12px] leading-4 text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
      >
        - THE END -
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { useInfiniteScroll } from "@vueuse/core"
import CommentList from "@/components/comment/CommentList.vue"
import CommentLoading from "@/components/loading/CommentLoading.vue"
import { getComments } from "@/api/comments"
import type { CommentItem } from "@/types/comments"

defineOptions({
  name: "NoteDetailComments",
})

interface NoteDetailCommentsProps {
  container: HTMLDivElement | null
  total?: string
  noteId: string
}

const props = defineProps<NoteDetailCommentsProps>()

const commentsList = ref<CommentItem[]>([])
const cursor = ref("")
const hasMore = ref(false)
const loading = ref(false)

watch(
  () => props.noteId,
  async () => {
    try {
      loading.value = true
      const { data } = await getComments({
        note_id: props.noteId,
        cursor: "",
        top_comment_id: "",
        image_formats: ["jpg", "webp", "avif"],
      })

      console.log(data)
      commentsList.value = data.comments
      cursor.value = data.cursor
      hasMore.value = data.has_more
    } catch (error) {
    } finally {
      loading.value = false
    }
  },
  {
    immediate: true,
  }
)

watch(
  () => props.container,
  () => {
    if (props.container) {
      useInfiniteScroll(
        props.container,
        async () => {
          console.log("load more")
          if (loading.value) return
          if (!hasMore.value) return
          try {
            loading.value = true
            const { data } = await getComments({
              note_id: props.noteId,
              cursor: cursor.value,
              top_comment_id: "",
              image_formats: ["jpg", "webp", "avif"],
            })

            commentsList.value.push(...data.comments)
            cursor.value = data.cursor
            hasMore.value = data.has_more
          } catch (error) {
          } finally {
            loading.value = false
          }
        },
        { distance: 10, canLoadMore: () => hasMore.value }
      )
    }
  }
)
</script>
