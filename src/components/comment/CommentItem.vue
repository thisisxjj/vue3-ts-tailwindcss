<template>
  <div :id="`comment-${comment.id}`" class="relative flex p-2">
    <div v-if="userInfo" class="relative flex z-[1] w-full shrink-0">
      <div class="flex-grow-0 flex-shrink-0 basis-auto">
        <RouterLink :to="`/user/profile/${userId}`" target="_blank">
          <img
            class="h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)]"
            :src="userImage"
            :alt="userName"
          />
        </RouterLink>
      </div>
      <div class="ml-3 flex flex-col text-[14px] flex-grow">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <RouterLink
              class="leading-[18px] text-[var(--color-tertiary-label)] hover:text-[var(--color-secondary-label)] dark:hover:text-[var(--dark-color-secondary-label)] dark:text-[var(--dark-color-tertiary-label)]"
              :to="`/user/profile/${userId}`"
              target="_blank"
            >
              {{ userName }}
            </RouterLink>
            <span
              v-if="isAuthorTagShow"
              class="ml-1 px-[6px] py-[3px] text-[10px] text-[var--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] rounded-[10.5px] font-medium"
            >
              作者
            </span>
          </div>
        </div>
        <div
          class="w-auto mt-1 leading-[140%] text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)]"
        >
          <template v-if="isNotTargetToParentComment">
            回复
            <span
              class="text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
            >
              {{ targetCommentUsername }}
            </span>
            :
          </template>
          <NoteDesc :desc="content" :link-list="atUserList" />
        </div>
        <div
          class="flex items-center justify-between text-[12px] leading-4 text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
        >
          <div class="my-2">
            <span>{{ infoDate }}</span>
            <span class="ml-1 leading-[120%]">{{ ipLocation }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="like">
            <span
              class="px-1 text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] font-medium relative cursor-pointer flex items-center hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)]"
            >
              <span class="flex items-center">
                <Icon icon="icon-park-outline:like" width="16" height="16" />
              </span>
              <span class="ml-[2px] font-medium leading-none">
                {{ likeCount }}
              </span>
            </span>
          </div>
          <div
            class="reply text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] px-1 ml-1 flex items-center justify-center cursor-pointer hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)]"
          >
            <Icon icon="tabler:message-circle-2" width="16" height="16" />
            <span class="ml-[2px] leading-none">
              {{ replayText }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { Icon } from "@iconify/vue"
import NoteDesc from "../note-desc/NoteDesc.vue"
import { formatCommentDate } from "@/utils/date"
import type { CommentItem } from "@/types/comments"

defineOptions({
  name: "CommentItem",
})

interface CommentItemProps {
  comment: CommentItem
  parentId?: string
}

const props = defineProps<CommentItemProps>()

const userInfo = computed(() => props.comment.user_info)
const userId = computed(() => userInfo.value?.user_id)
const userImage = computed(() => userInfo.value?.image)
const userName = computed(() => userInfo.value?.nickname)

const showTags = computed(() => props.comment.show_tags)
const isAuthorTagShow = computed(() => showTags.value.includes("is_author"))

const content = computed(() => props.comment.content)
const atUserList = computed(() => props.comment.at_users)

const infoDate = computed(() => formatCommentDate(props.comment.create_time))
const ipLocation = computed(() => props.comment.ip_location)
const likeCount = computed(() => props.comment.like_count)
const replyCount = computed(() => props.comment.sub_comment_count)
const replayText = computed(() =>
  Number(replyCount.value) > 0 ? replyCount.value : "回复"
)

// 判断当前评论不是回复父评论的
const isNotTargetToParentComment = computed(
  () =>
    props.parentId &&
    props.comment.target_comment &&
    props.parentId !== props.comment.target_comment?.id
)
const targetCommentUsername = computed(
  () => props.comment.target_comment?.user_info.nickname
)
</script>
