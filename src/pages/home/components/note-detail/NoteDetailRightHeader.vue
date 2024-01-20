<template>
  <div>
    <div
      class="flex justify-between items-center w-full p-4 xl:p-6 h-full border-b border-solid border-transparent lg:p-5"
    >
      <div class="flex items-center overflow-hidden">
        <RouterLink :to="`/user/profile/${user.user_id}`" target="_blank">
          <img
            class="flex items-center justify-center object-cover cursor-pointer w-10 h-10 rounded-full border border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)]"
            :src="user.avatar"
            :alt="user.nickname"
          />
        </RouterLink>
        <RouterLink
          :to="`/user/profile/${user.user_id}`"
          target="_blank"
          class="pl-3 h-10 flex items-center text-[16px] text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)] overflow-hidden"
        >
          <span class="overflow-hidden text-ellipsis whitespace-nowrap">
            {{ user.nickname }}
          </span>
        </RouterLink>
      </div>
      <Button class="w-[96px]" size="large">关注</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/button/Button.vue"
import { FeedUser } from "@/types/feeds"

defineOptions({
  name: "NoteDetailRightHeader",
})

interface NoteDetailRightHeaderProps {
  user: FeedUser
}

defineProps<NoteDetailRightHeaderProps>()
</script>
