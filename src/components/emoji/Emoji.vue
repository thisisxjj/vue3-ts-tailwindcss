<template>
  <template v-if="isLoading">
    {{ emoji }}
  </template>
  <img
    class="mx-[1px] h-4 translate-y-[-2px] inline-block relative border-none"
    v-show="!isLoading"
    :src="emojiSrc"
    @load="handleEmojiLoad"
  />
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { emojiList } from "./emoji-list"

const props = defineProps<{
  emoji: string
}>()

const isLoading = ref(true)
const emojiSrc = computed(() => `/emoji/${emojiList[props.emoji]}`)

const handleEmojiLoad = () => {
  isLoading.value = false
}
</script>
