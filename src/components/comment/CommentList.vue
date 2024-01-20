<template>
  <div class="relative">
    <div v-for="item in list" :class="cx(type === 'parent' && 'mb-4')">
      <CommentItemComp :comment="item" :parentId="parentComentId" />
      <div v-if="type === 'parent'" class="ml-[52px]">
        <CommentList
          type="sub"
          :list="item.sub_comments"
          :parentComentId="item.id"
        />
        <div
          v-if="
            calcRemainReplyNum(item.sub_comment_count, item.sub_comments) > 0 &&
            !item.loading
          "
          class="ml-11 h-8 leading-8 dark:text-[var(--dark-color-link)] text-[var(--color-link)] cursor-pointer font-medium text-[14px]"
          @click="handleShowMoreClick(item)"
        >
          展开
          {{ calcRemainReplyNum(item.sub_comment_count, item.sub_comments) }}
          条回复
        </div>
        <CommentLoading v-if="item.loading" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cx } from "class-variance-authority"
import CommentItemComp from "./CommentItem.vue"
import CommentLoading from "../loading/CommentLoading.vue"
import type { CommentItem } from "@/types/comments"
import { getComments } from "@/api/comments"

defineOptions({
  name: "CommentList",
})

interface CommentListProps {
  list: CommentItem[]
  type: "sub" | "parent"
  parentComentId?: string
}

withDefaults(defineProps<CommentListProps>(), {
  list: () => [],
  type: "parent",
})

// 计算剩余回复数
const calcRemainReplyNum = (
  totalReplyNum: string | undefined,
  subReplyList: CommentItem[] | undefined
) => {
  const totalSubCommentNum = Number(totalReplyNum) || 0
  const subShownCommentNum = subReplyList?.length || 0

  return totalSubCommentNum - subShownCommentNum
}

const handleShowMoreClick = async (item: CommentItem) => {
  try {
    item.loading = true
    const { data } = await getComments({
      note_id: item.note_id,
      root_comment_id: item.id,
      num: 10,
      cursor: item.sub_comment_cursor!,
      image_formats: ["jpg", "webp", "avif"],
    })

    item.sub_comment_has_more = data.has_more
    item.sub_comments = item.sub_comments
      ? [...item.sub_comments, ...data.comments]
      : data.comments
    item.sub_comment_cursor = data.cursor
  } catch (error) {
  } finally {
    item.loading = false
  }
}
</script>
