<template>
  <div class="p-3">
    <RouterLink
      class="mb-2 cursor-pointer break-all link-1"
      :to="`/explore/${userId}`"
      @click.native="$emit('linkClick')"
    >
      <span>{{ title }}</span>
    </RouterLink>
    <div
      class="flex items-center justify-between h-5 text-[var(--color-secondary-label)] dark:text-[--dark-color-secondary-label] text-[12px] transition-colors duration-1000"
    >
      <RouterLink
        class="flex items-center text-inherit overflow-hidden text-ellipsis whitespace-nowrap mr-3"
        :to="`/user/profile/${userId}`"
      >
        <img
          class="w-5 h-5 mr-[6px] rounded-full border border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)] shrink-0"
          :src="userAvator"
          :alt="userName"
        />
        <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{
          userName
        }}</span>
      </RouterLink>
      <span class="relative cursor-pointer flex items-center">
        <Icon icon="icon-park-outline:like" />
        <span class="mr-[2px]">{{ likeCount }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
defineOptions({
  name: "FeedCardFooter",
})

interface FeedCardFooterProps {
  title: string
  userId: string
  userName: string
  userAvator: string
  likeCount: string
  isLike?: boolean
}

defineProps<FeedCardFooterProps>()

defineEmits<{
  linkClick: []
}>()
</script>

<style>
.link-1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  @apply text-[var(--color-primary-label)] dark:text-[var(--dark-color-primary-label)];
}
</style>
