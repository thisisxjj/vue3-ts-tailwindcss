<template>
  <div
    class="absolute inset-x-0 top-0 h-0 select-none"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <div
      :style="{ display, transform, visibility: 'visible' }"
      class="p-1 rounded-xl z-10 bg-white dark:bg-[var(--dark-elevation-high-background)] relative overflow-scroll min-w-[192px] shadow-menu-list dark:shadow-dark-menu-list"
    >
      <MenuItem
        v-for="{ name, href } in list"
        :name="name"
        :link="href"
        :key="name"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue"
import { MenuListProps } from "./type"
defineOptions({
  name: "MenuList",
})

defineProps<MenuListProps>()
defineEmits(["mouseenter", "mouseleave"])
</script>
