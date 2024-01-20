import { Ref, onMounted, ref, watchEffect } from "vue"
import { getHomeFeed } from "@/api/home"
import type { FeedDataItem } from "@/types/feeds"

type CardsListItemType = {
  data: FeedDataItem
  transform: string
}

// 在heightRows数组中找到最小高度的index
const findFirstLowestHeightIndex = (heightRows: number[]) => {
  const minVal = Math.min(...heightRows)
  return heightRows.findIndex((item) => item === minVal)
}

// 将value插入到heightRows数组最小值的index位置
const insertValInFisrtLowest = (
  heightRows: number[],
  minHeightIndex: number,
  value: number
) => {
  heightRows.splice(minHeightIndex, 1, value)
}

export const useCardPosition = (
  cardWidth: Ref<number>,
  rowNumber: Ref<number>,
  rowGap: Ref<number>,
  colunmGap: Ref<number>
) => {
  const cardsList = ref<CardsListItemType[]>([])
  const cardsRef = ref<any[]>([])

  onMounted(async () => {
    const { data } = await getHomeFeed()
    const { items } = data
    cardsList.value = items.map((item) => ({
      data: item,
      transform: "",
    }))

    console.log(items, cardsRef.value)
  })

  watchEffect(() => {
    if (cardsRef.value.length === 0) return
    const heightRows = Array(rowNumber.value).fill(0)
    const list = cardsList.value
    const rows = rowNumber.value
    const width = cardWidth.value
    const rowGapVal = rowGap.value
    const colunmGapVal = colunmGap.value
    cardsList.value = list.map((item, index) => {
      const insertIndex = findFirstLowestHeightIndex(heightRows)
      const rowCount = Math.floor(index / rows)
      const translateY = heightRows[insertIndex] + rowCount * colunmGapVal
      const translateX = insertIndex * width + insertIndex * rowGapVal

      const curCardRef = cardsRef.value[index]!
      insertValInFisrtLowest(
        heightRows,
        insertIndex,
        curCardRef.cardHeight + heightRows[insertIndex]
      )

      return {
        ...item,
        transform: `translate(${translateX}px, ${translateY}px)`,
      }
    })
  })

  return {
    cardsList,
    cardsRef,
  }
}
