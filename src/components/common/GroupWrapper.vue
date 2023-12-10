<template>
  <div class="p-1">
    <div
      v-if="!!header"
      class="flex items-center px-3 font-normal h-8 text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] text-[12px]"
    >
      {{ header }}
    </div>
    <template v-for="item in group" :key="item.name">
      <MoreInfoMenuButton
        :name="item.name"
        :icon="item.icon"
        :new-icon="item.newIcon"
        :custom="item.custom"
      >
      </MoreInfoMenuButton>
    </template>
  </div>
  <Divider v-if="divider" />
</template>

<script setup lang="ts">
import { GroupWrapperProps } from "./types.ts"
import MoreInfoMenuButton from "../button/MoreInfoMenuButton.vue"
import Divider from "./Divider.vue"

defineOptions({
  name: "GroupWrapper",
})

defineProps<GroupWrapperProps>()
</script>

<style scoped></style>
