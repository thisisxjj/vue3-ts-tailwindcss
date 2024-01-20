<template>
  <div class="group relative h-full w-[var(--sliderWidth)] cursor-pointer">
    <div
      class="ml-auto mr-auto relative overflow-hidden list-none p-0 z-[1] touch-pan-y w-[calc(100% - 0.5px)] h-full"
    >
      <div
        :class="
          cx(
            'relative w-full h-full z-[1] flex box-content',
            isAnimation && 'duration-500',
            !isAnimation && 'duration-0'
          )
        "
        :style="{ transform: translateX }"
        @transitionend="handleTransitionEnd"
      >
        <div
          :key="index"
          v-for="(img, index) in list"
          class="flex w-full h-full relative items-center justify-center shrink-0 bg-no-repeat bg-center bg-contain transition-none"
          :style="{ backgroundImage: `url(${img})`, width: `${width}px` }"
        ></div>
      </div>
    </div>
    <div
      v-if="listLength > 1"
      class="group-hover:opacity-100 absolute py-1 px-2 text-center font-medium text-[12px] leading-[16px] rounded-xl z-[2] bg-[var(--material-background)] text-white opacity-0 transition-all duration-300 right-4 top-4 backdrop-filt"
    >
      {{ currentIndex + 1 }} / {{ listLength }}
    </div>
    <ArrowButton
      v-if="listLength > 1"
      @click="handlePre"
      :is-forbidden="isFirst"
    />
    <ArrowButton
      v-if="listLength > 1"
      variant="right"
      @click="handleNext"
      :is-forbidden="isLast"
    />
    <SliderDots
      v-if="listLength > 1"
      :num="listLength"
      :cur-index="currentIndex"
      @select="handleDotSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { cx } from "class-variance-authority"
import ArrowButton from "../button/ArrowButton.vue"
import SliderDots from "./SliderDots.vue"

interface SliderProps {
  list: string[]
  width: number
}

const props = defineProps<SliderProps>()

const currentIndex = ref(0)
const translateX = computed(() => {
  return `translateX(${-currentIndex.value * props.width}px)`
})

const listLength = computed(() => props.list.length)
const lastIndex = computed(() => listLength.value - 1)
const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value === lastIndex.value)
// const tansform = computed(() => )
const isAnimation = ref(false)

const handlePre = () => {
  if (currentIndex.value === 0) return

  isAnimation.value = true
  currentIndex.value = currentIndex.value - 1
}

const handleNext = () => {
  if (currentIndex.value === lastIndex.value) return

  isAnimation.value = true
  currentIndex.value = currentIndex.value + 1
}

const handleDotSelect = (newIndex: number) => {
  currentIndex.value = newIndex
}

const handleTransitionEnd = () => (isAnimation.value = false)

// 判断是否处于touch状态
const isTouching = ref(false)
// 开始touch时Client X
const startTouchClientX = ref(0)
// 开始touch时Client Y
const startTouchClientY = ref(0)
const lastTouchClientX = ref(0)
const lastTouchClientY = ref(0)
// 移动距离
const touchDir = ref(0)

const handleTouchStart = (e: TouchEvent) => {
  const {
    touches: [touch],
  } = e
  isTouching.value = true
  startTouchClientX.value = touch.clientX
  startTouchClientY.value = touch.clientY
  console.log("touch start", touch)
}

const handleTouchMove = (e: TouchEvent) => {
  const {
    touches: [touch],
  } = e

  console.log("touch move", touch)
  lastTouchClientX.value = touch.clientX
  lastTouchClientY.value = touch.clientY

  const xDir = lastTouchClientX.value - startTouchClientX.value
  // 最小索引时,禁止向右平移
  if (currentIndex.value === 0 && xDir > 0) return
  // 最大索引时,禁止向左移动
  if (currentIndex.value === lastIndex.value && xDir < 0) return
  touchDir.value = translateX.value + xDir
}

const handleTouchEnd = () => {
  console.log("touch end")
  if (!lastTouchClientX.value) return
  // 判断横向移动距离和纵向移动距离,如果纵向移动超过了横向,不做处理
  const xDir = lastTouchClientX.value - startTouchClientX.value
  // const yDir = lastTouchClientY.value - startTouchClientY.value
  // if (Math.abs(yDir) > Math.abs(xDir)) return
  // // 最小索引时,禁止向右平移
  // if (currentIndex.value === 0 && xDir > 0) return
  // // 最大索引时,禁止向左移动
  // if (currentIndex.value === lastIndex.value && xDir < 0) return
  const amount = Math.round(Math.abs(xDir) / props.width)
  if (xDir > 0) {
    if (currentIndex.value > 0) {
      currentIndex.value = currentIndex.value - amount
    }
  } else {
    if (currentIndex.value < lastIndex.value) {
      currentIndex.value = currentIndex.value + amount
    }
  }
  // if (Math.abs(xDir) >= props.width / 2) {
  //   currentIndex.value =
  //     xDir > 0 ? currentIndex.value - 1 : currentIndex.value + 1
  // }
  isTouching.value = false
}
</script>

<style scoped>
.backdrop-filt {
  backdrop-filter: saturate(150%) blur(10px);
}
</style>
