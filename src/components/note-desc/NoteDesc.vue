<!-- 笔记文字描述组件 包括展示emoji、链接、话题、文本等内容 -->
<template>
  <template v-for="{ name, type, userId } in displayList">
    <NoteEmojiDesc v-if="type === TagEnum.TEXT" :desc="name" />
    <TopicTag
      class="mr-[2px] dark:text-[var(--dark-color-link)] text-[var(--color-link)] cursor-pointer"
      v-else-if="type === TagEnum.TAG"
      :topic="name"
    />
    <AtLink
      class="mr-[2px] dark:text-[var(--dark-color-link)] text-[var(--color-link)] cursor-pointer"
      v-else="type === TagEnum.AT_LINK"
      :link="name"
      :user-id="userId"
    />
  </template>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue"
import TopicTag from "../common/TopicTag.vue"
import NoteEmojiDesc from "../common/NoteEmojiDesc.vue"
import AtLink from "../common/AtLink.vue"
import { TagListItem, AtUserItem } from "../../types/feed-detail"

defineOptions({
  name: "NoteDesc",
})

interface NoteDescProps {
  desc?: string
  tagList?: TagListItem[]
  linkList?: AtUserItem[]
}

const props = withDefaults(defineProps<NoteDescProps>(), {
  tagList: () => [],
  linkList: () => [],
})

enum TagEnum {
  TEXT = "0",
  TAG = "1",
  AT_LINK = "2",
}

type TagEnumType = `${TagEnum}`

interface DisplayDesc {
  type: TagEnumType
  name: string
  userId?: string
}

const descSplitPoundList = computed(() => props.desc?.split(/#/g) || [])

const displayList = ref<DisplayDesc[]>([])

const findeLinkByNickname = (nickname: string) =>
  props.linkList.find((cur) => `@${cur.nickname}` === nickname)

// 获取taglist
watch(
  () => descSplitPoundList.value,
  () => {
    descSplitPoundList.value.map((item: string) => {
      const withoutQuat = item.replace(/\[[\s\S]+\]/g, "")

      // 判断是否时topic
      const existedTag = props.tagList.find((tag) => withoutQuat === tag.name)
      if (existedTag) {
        displayList.value.push({
          type: TagEnum.TAG,
          name: existedTag.name,
        })

        return
      }

      // 判断是否是At Link
      const atLinkNameList = props.linkList.map(
        ({ nickname }) => `@${nickname}`
      )

      // 判断如果是否有一个atlink存在
      const inAtLinkList = atLinkNameList.filter((linkName) =>
        withoutQuat.includes(linkName)
      )

      if (inAtLinkList && inAtLinkList.length > 0) {
        let startIndex = 0
        inAtLinkList.forEach((atLink) => {
          const index = withoutQuat.indexOf(atLink)
          const subStr = withoutQuat.substring(startIndex, index)
          if (subStr) {
            displayList.value.push({
              type: TagEnum.TEXT,
              name: subStr,
            })
          }
          displayList.value.push({
            type: TagEnum.AT_LINK,
            name: atLink,
            userId: findeLinkByNickname(atLink)?.user_id,
          })
          startIndex = index + atLink.length
        })

        return
      }

      displayList.value.push({
        type: TagEnum.TEXT,
        name: item,
      })
    })
  },
  {
    immediate: true,
  }
)
</script>
