<template>
  <div
    class="
      h-[calc(100vh-var(--header-height))]
      bg-white
      pt-4
      flex-shrink-0
      flex-col
      mt-[var(--header-height)]
      fixed
      overflow-visible
      xxl:w-[266.66667px]
      xxl:ml-4
      xl:w-sidebar-xl
      xl:ml-4
      lg:w-sidebar-lg
      lg:ml-3
      md:w-sidebar-md
      md:ml-3
      md:block
      hidden
    "
  >
    <ul class="select-none min-h-[auto]">
      <SidebarItem link="/explore" icon="tabler:smart-home" title="发现" />
      <SidebarItem
        target="_blank"
        link="https://creator.xiaohongshu.com/publish/publish?source=official"
        icon="ci:add-plus-square"
        title="发布"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from '@/components/sidebar/SidebarItem.vue'
defineOptions({
  name: 'Sidebar',
})
</script>

<style scoped>

</style>