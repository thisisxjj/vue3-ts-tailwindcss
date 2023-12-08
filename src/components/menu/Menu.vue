<template>
  <div class="flex">
    <div class="md:block hidden">
      <MenuButton :list="cCList">创作中心</MenuButton>
      <MenuButton :list="bCList">业务合作</MenuButton>
    </div>
    <div class="md:hidden block">
      <button class="icon-button">
        <Icon icon="gg:menu" width="20" height="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue'
import MenuButton from './MenuButton.vue';
defineOptions({
  name: 'Menu',
})

const cCList = ref([
  {
    href: '#',
    name: '创作服务',
  },
  {
    href: '#',
    name: '直播管理',
  },
  {
    href: '#',
    name: '电脑直播助手',
  }
])

const bCList = ref([
{
    href: '#',
    name: '专业号',
  },
  {
    href: '#',
    name: '推广合作',
  },
  {
    href: '#',
    name: '蒲公英',
  },
  {
    href: '#',
    name: '商家入驻',
  },
  {
    href: '#',
    name: 'MCN入驻',
  }
])
</script>
