<!-- 笔记详情 -->
<template>
  <span>
    <template v-for="{ item, type } in descTypeList">
      <template v-if="type === DescEnum.BLACK">
        {{ item.replace(/ /g, "&nbsp;") }}
      </template>
      <template v-else-if="type === DescEnum.LINE_SPARK">
        <br v-for="_ in item.match(/\n/g)" />
      </template>
      <template v-else-if="type === DescEnum.EMOJI">
        <Emoji :emoji="item" />
      </template>
      <template v-else>
        {{ item }}
      </template>
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue"
import Emoji from "@/components/emoji/Emoji.vue"

defineOptions({
  name: "NoteEmojiDesc",
})

const props = defineProps<{
  desc: string
}>()

enum DescEnum {
  EMOJI = "1", // 表情包
  BLACK = "2", // 空格
  LINE_SPARK = "3", // 换行符
  NORMAL = "4", // 普通
}

const splitDescList = computed(() => props.desc.split(/([\n]+|[ ]+|\[.*?\])/))

const descTypeList = computed(() =>
  splitDescList.value
    .filter((item) => !!item)
    .map((item) => {
      let type = DescEnum.NORMAL
      if (/^\[(.*?)\]$/.test(item)) {
        type = DescEnum.EMOJI
      } else if (/[\n]+/.test(item)) {
        type = DescEnum.LINE_SPARK
      } else if (/[ ]+/.test(item)) {
        type = DescEnum.BLACK
      }

      return {
        type,
        item,
      }
    })
)
</script>
