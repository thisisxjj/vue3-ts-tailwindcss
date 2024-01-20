import { Ref, ref } from "vue"
import { useBreakpoints, useResizeObserver } from "@vueuse/core"
import { breakpointsTailwind } from "@/utils/config"

// media query 断点 每行卡片个数
const breackpointsRowNumber = {
  [breakpointsTailwind.sm]: 2,
  [breakpointsTailwind.md]: 3,
  [breakpointsTailwind.lg]: 3,
  [breakpointsTailwind.xl]: 4,
  [breakpointsTailwind["xxl"]]: 5,
}

interface BreackpointsMap {
  [x: string]: number
}

// media query 断点 卡片的水平gap距离
const breackpointsRowGap = {
  [breakpointsTailwind.sm]: 12,
  [breakpointsTailwind.md]: 24,
  [breakpointsTailwind.lg]: 24,
  [breakpointsTailwind.xl]: 24,
  [breakpointsTailwind["xxl"]]: 32,
}

// media query 断点 卡片的gap距离
const breackpointsColumnGap = {
  [breakpointsTailwind.sm]: 6,
  [breakpointsTailwind.md]: 12,
  [breakpointsTailwind.lg]: 12,
  [breakpointsTailwind.xl]: 12,
  [breakpointsTailwind["xxl"]]: 16,
}

// 根据传入的 breackpointsMap 获取当前断点的 值
const queryMedia = (breackpointsMap: BreackpointsMap) => (breakpoints: any) => {
  const smallerSm = breakpoints.smaller("sm")
  const betweenSmMd = breakpoints.between("sm", "md")
  const betweenMdLg = breakpoints.between("md", "lg")
  const betweenLgXl = breakpoints.between("lg", "xl")
  const betweenXl2Xl = breakpoints.between("xl", "xxl")
  const greater2Xl = breakpoints.greater("xxl")
  if (greater2Xl.value || betweenXl2Xl.value) {
    return breackpointsMap[breakpointsTailwind["xxl"]]
  } else if (betweenLgXl.value) {
    return breackpointsMap[breakpointsTailwind.xl]
  } else if (betweenMdLg.value) {
    return breackpointsMap[breakpointsTailwind.lg]
  } else if (betweenSmMd.value) {
    return breackpointsMap[breakpointsTailwind.md]
  } else if (smallerSm.value) {
    return breackpointsMap[breakpointsTailwind.sm]
  }

  return breackpointsMap[breakpointsTailwind["xxl"]]
}

const getCurrentRowNumber = queryMedia(breackpointsRowNumber)

const getCurrentRowGap = queryMedia(breackpointsRowGap)

const getCurrentColunmGap = queryMedia(breackpointsColumnGap)

export const useCardWidthHeight = (
  containerRef: Ref<HTMLDivElement | null>
) => {
  const cardWidth = ref<number>(0)
  const colunmGap = ref<number>(0)
  const rowGap = ref<number>(0)
  const rowNumber = ref<number>(0)

  const breakpoints = useBreakpoints(breakpointsTailwind)

  useResizeObserver(containerRef, (entries) => {
    const entry = entries[0]

    const containerWidth = entry.contentRect.width
    const rowNumberVal = getCurrentRowNumber(breakpoints)
    const rowGapVal = getCurrentRowGap(breakpoints)
    const colunmGapVal = getCurrentColunmGap(breakpoints)
    const totalRowGapWidth = (rowNumberVal - 1) * rowGapVal
    cardWidth.value = (containerWidth - totalRowGapWidth) / rowNumberVal
    colunmGap.value = colunmGapVal
    rowGap.value = rowGapVal
    rowNumber.value = rowNumberVal
  })

  return {
    cardWidth,
    colunmGap,
    rowGap,
    rowNumber,
  }
}
