import { reactive, ref } from "vue"
import { storeToRefs } from "pinia"
import { gsap } from "gsap"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"
import { useNoteContainerRect } from "./useNoteContainerRect"

/**
 * note container的动画钩子
 */
export const useNoteContainerTransition = () => {
  const showMask = ref(false)
  // 获取当前选中卡片的信息
  const store = useNoteDetailStore()
  const { curNote } = storeToRefs(store)
  const noteCardImg = reactive({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    containerWidth: 0,
    containerHeight: 0,
  })

  const onBeforeEnter = (el: Element) => {
    console.log("before enter:", el)
    if (!curNote.value) return

    const cardImage = curNote.value.cardImageRef as any

    if (!cardImage) return
    const { x, y, width, height } = cardImage.$el.getBoundingClientRect()
    noteCardImg.x = x
    noteCardImg.y = y
    noteCardImg.height = height
    noteCardImg.width = width
    gsap.set(el, {
      x,
      y,
      scale: 0.3,
    })
  }

  const onEnter = (el: Element, done: () => void) => {
    const {
      _transformX: transformX,
      _transformY: transformY,
      _containerWidth: containerWidth,
      _containerHeight: containerHeight,
    } = useNoteContainerRect({
      parentContainerHeight: window.innerHeight,
      parentContainerWidth: window.innerWidth,
    })

    noteCardImg.containerWidth = containerWidth.value
    noteCardImg.containerHeight = containerHeight.value

    gsap.to(el, {
      duration: 0.5,
      x: transformX.value,
      y: transformY.value,
      scale: 1,
      onComplete: () => {
        showMask.value = true
        done()
      },
    })
  }

  const onLeave = (el: Element, done: () => void) => {
    console.log("on leave", noteCardImg)
    gsap.to(el, {
      duration: 0.5,
      x: noteCardImg.x,
      y: noteCardImg.y,
      scaleX: noteCardImg.width / noteCardImg.containerWidth,
      scaleY: noteCardImg.height / noteCardImg.containerHeight,
      onComplete: () => {
        showMask.value = false
        done()
      },
    })
  }

  return {
    showMask,
    onBeforeEnter,
    onEnter,
    onLeave,
  }
}
