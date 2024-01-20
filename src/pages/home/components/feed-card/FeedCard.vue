<template>
  <section
    ref="card"
    class="absolute top-0 left-0"
    :style="{ width: `${width}px`, transform }"
  >
    <RouterLink
      ref="cardImageRef"
      :to="`/explore/${id}`"
      class="cursor-pointer before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-transparent before:backdrop-filter before:transition-all before:rounded-2xl after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition after:duration-200 after:bg-transparent hover:after:bg-[var(--mask-backdrop)] hover:rounded-2xl relative flex rounded-2xl overflow-hidden shadow-feed-card dark:shadow-dark-feed-card transi"
      :style="{
        height: `${realImgHeight}px`,
        background: `
          url(${cover.url_default}) ${bgPosition} no-repeat
        `,
      }"
      @click.native="handleNoteDetailClick"
    >
    </RouterLink>
    <FeedCardFooter
      :title="title"
      :user-id="user.user_id"
      :user-name="user.nickname"
      :user-avator="user.avatar"
      :like-count="likeInfo.liked_count"
      :is-like="likeInfo.liked"
      @link-click="handleNoteDetailClick"
    />
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { FeedCover, FeedInteractInfo, FeedUser } from "@/types/feeds"
import FeedCardFooter from "./FeedCardFooter.vue"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"
import { RouterLink } from "vue-router"

defineOptions({
  name: "FeedCard",
})

interface FeedCardProps {
  id: string
  title: string
  width: number
  imgWidth: number
  imgHeight: number
  cover: FeedCover
  likeInfo: FeedInteractInfo
  user: FeedUser
  transform: string
}
// 默认高度
const CLIENT_HEIGHT = 1920
// 默认宽度
const CLIENT_WIDTH = 1440

const props = withDefaults(defineProps<FeedCardProps>(), {
  imgWidth: CLIENT_WIDTH,
  imgHeight: CLIENT_HEIGHT,
})

const card = ref<HTMLElement | null>(null)
const cardImageRef = ref<InstanceType<typeof RouterLink> | null>(null)
const cardHeight = ref<number>(0)

defineExpose({
  cardHeight,
})

const widthTallerHeight = computed(() => props.imgHeight < props.imgWidth)

const ratio = computed(() => {
  if (widthTallerHeight.value) {
    return props.imgWidth / props.imgHeight > CLIENT_HEIGHT / CLIENT_WIDTH
  } else {
    return props.imgHeight / props.imgWidth > CLIENT_HEIGHT / CLIENT_WIDTH
  }
})

const maxImgWidth = computed(() => {
  if (widthTallerHeight.value) {
    if (ratio.value) {
      return CLIENT_HEIGHT
    } else {
      return props.imgWidth
    }
  } else {
    if (ratio.value) {
      return CLIENT_WIDTH
    } else {
      return props.imgWidth
    }
  }
})

const maxImgHeight = computed(() => {
  if (widthTallerHeight.value) {
    return ratio.value ? CLIENT_WIDTH : props.imgHeight
  } else {
    return ratio.value ? CLIENT_HEIGHT : props.imgHeight
  }
})

const realImgHeight = computed(() =>
  Math.round((maxImgHeight.value / maxImgWidth.value) * props.width)
)

const bgPosition = computed(() => {
  if (widthTallerHeight.value) {
    return ratio.value ? "center center / auto 100%" : "left top 100% / 100%"
  } else {
    return ratio.value ? "left top 100% / 100%" : "center center / auto 100%"
  }
})

watch(
  () => card.value,
  () => {
    if (!card.value) return
    cardHeight.value = card.value.clientHeight
  }
)

watch(
  () => props.width,
  () => {
    cardHeight.value = card.value?.clientHeight ?? 0
  }
)

const { showNoteDetailModal } = useNoteDetailStore()

const handleNoteDetailClick = () => {
  showNoteDetailModal({
    id: props.id,
    imgWidth: props.imgWidth,
    imgHeight: props.imgHeight,
    user: props.user,
    cardImageRef: cardImageRef.value,
  })
}
</script>

<style scoped>
.transi {
  transition: background 2s;
  transform: translateZ(0);
}
</style>
