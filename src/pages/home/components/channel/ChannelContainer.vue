<template>
  <div class="flex items-center justify-between select-none">
    <div
      class="relative overflow-hidden flex items-center text-[16px] text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] h-[72px] whitespace-nowrap backdrop-blur-[20px] bg-transparent w-channel-sm sm:w-channel-sm-md md:w-channel-md-lg lg:w-channel-lg-xl xl:w-channel-xl-xxl xxl:w-channel-xxl"
    >
      <div
        class="flex overflow-x-scroll overflow-y-hidden whitespace-nowrap text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)]"
      >
        <ChannelItem
          v-for="{ type, title } in channelList"
          :key="type"
          :active="type === curType"
          :title="title"
          :type="type"
          @click="handleChannelItemClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ChannelItem from "./ChannelItem.vue"

defineOptions({
  name: "ChannelContainer",
})

const curType = ref(1)

const channelList = [
  {
    type: 1,
    title: "推荐",
  },
  {
    type: 2,
    title: "穿搭",
  },
  {
    type: 3,
    title: "美食",
  },
  {
    type: 4,
    title: "彩妆",
  },
  {
    type: 5,
    title: "影视",
  },
  {
    type: 6,
    title: "职场",
  },
  {
    type: 7,
    title: "情感",
  },
  {
    type: 8,
    title: "家具",
  },
  {
    type: 9,
    title: "游戏",
  },
  {
    type: 10,
    title: "旅行",
  },
  {
    type: 11,
    title: "健身",
  },
]

const handleChannelItemClick = (type: number) => {
  curType.value = type
}
</script>
