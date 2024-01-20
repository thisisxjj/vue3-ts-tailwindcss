<template>
  <!-- TODO 将高度作为计算值 -->
  <div
    ref="feedsContainer"
    class="mx-auto my-0 relative w-full h-[1733px] visible transition-[width_0.5s]"
  >
    <template v-if="cardsList">
      <FeedCard
        :key="id"
        :ref="
          (el) => {
            if (el) cardsRef[index] = el
          }
        "
        v-for="(
          {
            data: {
              id,
              note_card: {
                user,
                display_title: displayTitle,
                interact_info: likeInfo,
                cover,
              },
            },
            transform,
          },
          index
        ) in cardsList"
        :id="id"
        :title="displayTitle"
        :user="user"
        :like-info="likeInfo"
        :width="cardWidth"
        :img-width="cover.width"
        :img-height="cover.height"
        :cover="cover"
        :transform="transform"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import FeedCard from "./FeedCard.vue"
import { useCardWidthHeight } from "../hooks/useCardWidthHeight"
import { useCardPosition } from "../hooks/useCardPosition"

const feedsContainer = ref<HTMLDivElement | null>(null)

const { cardWidth, rowGap, colunmGap, rowNumber } =
  useCardWidthHeight(feedsContainer)

const { cardsList, cardsRef } = useCardPosition(
  cardWidth,
  rowNumber,
  rowGap,
  colunmGap
)
</script>
