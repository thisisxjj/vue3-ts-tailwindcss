<template>
  <div class="flex">
    <div class="md:block hidden">
      <MenuButton>创作中心</MenuButton>
      <MenuButton>业务合作</MenuButton>
    </div>
    <div class="md:hidden block">
      <button class="icon-button">
        <Icon icon="gg:menu" width="20" height="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuButton from './MenuButton.vue';
import { Icon } from '@iconify/vue'
defineOptions({
  name: 'Menu',
})
</script>
