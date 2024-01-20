<template>
  <div
    class="p-4 xl:px-6 xl:pb-6 md:px-4 md:pb-4 lg:px-5 lg:pb-5 text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)]"
  >
    <div v-if="title" class="text-[18px] leading-[140%] font-semibold mb-2">
      {{ title }}
    </div>
    <div
      v-if="desc"
      class="m-0 font-normal text-[16px] leading-[150%] text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)] whitespace-pre-wrap break-words"
    >
      <NoteDesc :desc="desc" :link-list="linkList" :tag-list="tagList" />
    </div>
    <div class="flex justify-between items-center mt-3">
      <div
        class="text-[14px] leading-[120%] text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
      >
        {{ infomation }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { formatDate } from "@/utils/date"
import NoteDesc from "@/components/note-desc/NoteDesc.vue"
import { TagListItem, AtUserItem } from "@/types/feed-detail"

defineOptions({
  name: "NoteDetailRightContent",
})

interface NoteDetailRightContentProps {
  title?: string
  desc?: string
  tagList: TagListItem[]
  linkList: AtUserItem[]
  time?: number
  ipLocation?: string
}

const props = withDefaults(defineProps<NoteDetailRightContentProps>(), {
  tagList: () => [],
  linkList: () => [],
})

const infomation = computed(
  () => `${formatDate(props.time!)} ${props.ipLocation}`
)
</script>
