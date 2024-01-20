import { Ref, computed, ref } from "vue"
import { useResizeObserver } from "@vueuse/core"
import { useNoteContainerRect } from "./useNoteContainerRect"

/**
 * 监听feed card列表容器宽度变化,计算note detail宽高和位置
 */
export const useNoteContainerObserver = (
  parentContainerRef: Ref<HTMLDivElement | null>
) => {
  // 媒体照片视频宽度
  const mediaWidth = ref(0)
  // 容器宽度
  const containerWidth = ref(0)
  const transformX = ref(0)
  const transformY = ref(0)

  const transform = computed(
    () => `translate(${transformX.value}px, ${transformY.value}px)`
  )

  useResizeObserver(parentContainerRef, (entries) => {
    const entry = entries[0]
    const parentContainerWidth = entry.contentRect.width
    const parentContainerHeight = entry.contentRect.height

    const { _transformX, _transformY, _mediaWidth, _containerWidth } =
      useNoteContainerRect({
        parentContainerHeight,
        parentContainerWidth,
      })

    transformX.value = _transformX.value
    transformY.value = _transformY.value
    mediaWidth.value = _mediaWidth.value
    containerWidth.value = _containerWidth.value
  })

  return {
    containerWidth,
    mediaWidth,
    transform,
    transformX,
    transformY,
  }
}
