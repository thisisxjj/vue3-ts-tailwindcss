<template>
  <div>
    <div
      :class="
        cx(
          'h-10 text-[var(--color-secondary-label)] dark:text-[var(--dark-color-secondary-label)] text-[1rem] rounded-lg flex items-center px-3 font-normal',
          !custom &&
            'cursor-pointer hover:bg-[var(--color-active-background)] dark:hover:bg-[var(--dark-color-active-background)] hover:text-[var(--color-primary-label)] dark:hover:text-[var(--dark-color-primary-label)]'
        )
      "
    >
      <span>{{ name }}</span>
      <div
        class="text-[var(--color-quaternary-label)] dark:text-[var(--dark-color-quaternary-label)] ml-auto"
      >
        <Icon
          v-if="icon"
          :icon="icon"
          class="font-semibold"
          height="24"
          width="24"
        />
      </div>
      <div v-if="newIcon">
        <Tag>新</Tag>
      </div>
      <ToggleThemeButton v-if="custom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { cx } from "class-variance-authority"
import Tag from "../common/Tag.vue"
import ToggleThemeButton from "./ToggleThemeButton.vue"
import { GroupItem } from "../common/types"

defineOptions({
  name: "MoreInfoMenuButton",
})

defineProps<GroupItem>()
</script>
