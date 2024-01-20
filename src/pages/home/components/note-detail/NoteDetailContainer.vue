<!-- 笔记详情Container -->
<template>
  <div
    class="flex shadow-none h-full w-full rounded-none border-none flex-col overflow-scroll transition-none sm:h-full sm:w-full sm:border-none sm:flex-col sm:overflow-scroll sm:shadow-none sm:rounded-none sm:transition-none md:flex-row md:h-note-container-lg lg:h-note-container-lg xl:h-note-container-xl xxl:h-note-container-xl bg-white dark:bg-[var(--dark-elevation-low-background00)] origin-top-left md:shadow-note-container md:rounded-[20px]"
    :style="{ width: `${width}px`, transform }"
  >
    <div
      class="bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)] relative shrink-0 select-none overflow-hidden rounded-l-[20px] object-contain min-w-[var(--interaction-width)] h-full sm:max-w-full sm:min-h-[50vw] sm:max-h-[60vw] sm:rounded-none sm:transition-none md:h-full md:max-h-full md:min-h-full md:rounded-l-[20px]"
      :style="{ width: `${mediaWidth}px` }"
    >
      <Slider :list="sliderList" :width="mediaWidth" />
    </div>
    <div
      class="shrink-0 rounded-r-[20px] relative flex flex-col flex-grow h-full bg-white dark:bg-[var(--dark-elevation-low-background)] overflow-hidden border-l border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)] w-[var(--interaction-width)] sm:border-none sm:border-l-0 sm:rounded-none md:rounded-r-[20px],"
    >
      <NoteDetailRightHeader v-if="curNote?.user" :user="curNote.user" />
      <div
        ref="rightContainer"
        class="transition-transform overflow-y-scroll flex-grow"
      >
        <NoteDetailRightContent
          v-if="feedDeatil"
          :title="title"
          :desc="desc"
          :tag-list="tagList"
          :link-list="linkList"
          :time="publishTime"
          :ip-location="ipLocation"
        />
        <Divider class="xl:mx-6 lg:mx-5 mx-4" />
        <NoteDetailComments
          v-if="curNote?.id"
          :container="rightContainer"
          :note-id="curNote?.id"
          :total="totalCommentNum"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { storeToRefs } from "pinia"
import Slider from "@/components/common/Slider.vue"
import Divider from "@/components/common/Divider.vue"
import NoteDetailRightHeader from "./NoteDetailRightHeader.vue"
import NoteDetailRightContent from "./NoteDetailRightContent.vue"
import NoteDetailComments from "./NoteDetailComments.vue"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"
import { getFeedDetail } from "@/api/home"
import { FeedDataDetailItem } from "@/types/feed-detail"

defineOptions({
  name: "NoteDetailContainer",
})

interface NoteDetailContainerProps {
  width: number
  mediaWidth: number
  transform: string
}

defineProps<NoteDetailContainerProps>()

const store = useNoteDetailStore()
const { curNote } = storeToRefs(store)

const feedDeatil = ref<FeedDataDetailItem | null>(null)
const rightContainer = ref<HTMLDivElement | null>(null)

const noteCard = computed(() => feedDeatil.value?.note_card)
const title = computed(() => noteCard.value?.title)
const desc = computed(() => noteCard.value?.desc)
const tagList = computed(() => noteCard.value?.tag_list ?? [])
const linkList = computed(() => noteCard.value?.at_user_list ?? [])
const publishTime = computed(() => noteCard.value?.last_update_time)
const ipLocation = computed(() => noteCard.value?.ip_location)
const sliderList = computed(
  () => noteCard.value?.image_list.map(({ url_default }) => url_default) ?? []
)

const interactInfo = computed(() => noteCard.value?.interact_info)
const totalCommentNum = computed(() => interactInfo.value?.comment_count ?? "0")

onMounted(async () => {
  const id = curNote.value?.id
  if (!id) return

  const { data } = await getFeedDetail(id)
  feedDeatil.value = data.items[0]
})
</script>
