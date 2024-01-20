import { ref } from "vue"
import { useBreakpoints } from "@vueuse/core"
import { breakpointsTailwind } from "@/utils/config"
import { useNoteDetailStore } from "@/stores/useNoteDetailStore"
import { storeToRefs } from "pinia"

interface BreackpointsMap {
  [x: string]: number | string
}

const breakpointsXMargin = {
  [breakpointsTailwind.sm]: 0,
  [breakpointsTailwind.md]: 88,
  [breakpointsTailwind.lg]: 88,
  [breakpointsTailwind.xl]: 104,
  [breakpointsTailwind["xxl"]]: 104,
}

const breakpointsInteractionWidth = {
  [breakpointsTailwind.sm]: "100%",
  [breakpointsTailwind.md]: "100%",
  [breakpointsTailwind.lg]: 360,
  [breakpointsTailwind.xl]: 400,
  [breakpointsTailwind["xxl"]]: 440,
}

const breakpointsYMargin = {
  [breakpointsTailwind.sm]: 0,
  [breakpointsTailwind.md]: 0,
  [breakpointsTailwind.lg]: 24,
  [breakpointsTailwind.xl]: 24,
  [breakpointsTailwind["xxl"]]: 32,
}

const queryMedia = (breakpointsMap: BreackpointsMap) => (breakpoints: any) => {
  const smallerSm = breakpoints.smaller("sm")
  const betweenSmMd = breakpoints.between("sm", "md")
  const betweenMdLg = breakpoints.between("md", "lg")
  const betweenLgXl = breakpoints.between("lg", "xl")
  const greaterXl = breakpoints.greater("xl")

  if (greaterXl.value) {
    return breakpointsMap[breakpointsTailwind.xxl]
  } else if (betweenLgXl.value) {
    return breakpointsMap[breakpointsTailwind.xl]
  } else if (betweenMdLg.value) {
    return breakpointsMap[breakpointsTailwind.lg]
  } else if (betweenSmMd.value) {
    return breakpointsMap[breakpointsTailwind.md]
  } else if (smallerSm.value) {
    return breakpointsMap[breakpointsTailwind.sm]
  }

  return breakpointsMap[breakpointsTailwind.xxl]
}

const getCurXMargin = queryMedia(breakpointsXMargin)
const getCurYMargin = queryMedia(breakpointsYMargin)
const getCurInteractionWidth = queryMedia(breakpointsInteractionWidth)

/**
 * 获取note container 的宽度 以及 位置
 */
export const useNoteContainerRect = ({
  parentContainerHeight,
  parentContainerWidth,
}: {
  parentContainerHeight: number
  parentContainerWidth: number
}) => {
  // 媒体照片视频宽度
  const _mediaWidth = ref(0)
  // 容器宽度
  const _containerWidth = ref(0)
  const _containerHeight = ref(0)
  const _transformX = ref(0)
  const _transformY = ref(0)

  //获取当前屏幕断点信息
  const breakpoints = useBreakpoints(breakpointsTailwind)
  // 获取当前选中卡片的信息
  const store = useNoteDetailStore()
  const { curNote } = storeToRefs(store)

  if (!curNote.value)
    return {
      _containerWidth,
      _mediaWidth,
      _transformX,
      _transformY,
      _containerHeight,
    }

  if (breakpoints.greater("md").value) {
    const imgWidth = curNote.value.imgWidth
    const imgHeight = curNote.value.imgHeight
    // 获取左右边距
    const curXMargin = getCurXMargin(breakpoints) as number
    // 上下边距
    const curYMargin = getCurYMargin(breakpoints) as number
    // 右侧评论区宽度
    const curInteractionWidth = getCurInteractionWidth(breakpoints) as number
    // note 容器高度
    const containerHeight = parentContainerHeight - 2 * curYMargin
    // 通过获取的图片宽高计算媒体宽度
    const calcMediaByImgWidth = (imgWidth / imgHeight) * containerHeight
    // 取二者的之间小的值作为最大值
    const mediaMaxWidth = Math.min(calcMediaByImgWidth, containerHeight)
    // 通过计算得出容器媒体图片的最大值
    const calcMaxWidth =
      parentContainerWidth - 2 * curXMargin - curInteractionWidth
    // 计算得出屏幕最小值为md时media的宽度 并且最小宽度为440
    _mediaWidth.value = Math.max(Math.min(mediaMaxWidth, calcMaxWidth), 440)
    _containerWidth.value = _mediaWidth.value + curInteractionWidth
    _transformX.value = (parentContainerWidth - _containerWidth.value) / 2
    _transformY.value = curYMargin
    _containerHeight.value = containerHeight
  } else {
    _containerWidth.value = parentContainerWidth
    _transformX.value = 0
    _transformY.value = 0
    _containerHeight.value = 100
  }

  return {
    _containerWidth,
    _containerHeight,
    _mediaWidth,
    _transformX,
    _transformY,
  }
}
