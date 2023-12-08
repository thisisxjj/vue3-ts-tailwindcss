<template>
  <div
    class="absolute inset-x-0 top-0 h-0 select-none"
    @mouseenter="$emit('mouseenter', $event)"
    @mouseleave="$emit('mouseleave', $event)"
  >
    <div :style="{ display, transform, visibility: 'visible' }" class="p-1 rounded-xl z-10 bg-white relative overflow-scroll min-w-[192px] menu-list-shadow">
      <li
        v-for="{name,href} in list"
        :key="name"
        class="
          group
          h-10
          w-full
          cursor-pointer
          px-3
          flex
          items-center
          text-base
          hover:bg-[var(--color-active-background)] hover:rounded-lg hover:text-[var(--color-primary-label)]
        "
      >
        <span class="flex flex-grow h-full items-center text-[var(--color-secondary-label)]">
          <a :href="href" class="inline-flex flex-grow text-inherit h-full items-center w-full">
            {{ name }}
          </a>
        </span>
        <span class="
          opacity-0
          invisible
          transition-opacity
          text-[var(--color-quaternary-label)]
          group-hover:visible
          group-hover:opacity-100"
        >
          <Icon icon="iconamoon:arrow-top-right-1" height="22" width="22" />
        </span>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { MenuListProps } from './type';
defineOptions({
  name: 'MenuList',
})

defineProps<MenuListProps>()
defineEmits(['mouseenter', 'mouseleave'])
</script>

<style scoped>
.menu-list-shadow {
  box-shadow: 0 4px 32px 0 rgba(0,0,0,0.08),0 1px 4px 0 rgba(0,0,0,0.04);
}
</style>
