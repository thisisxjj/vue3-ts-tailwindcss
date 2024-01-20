<template>
  <template :key="item.desc" v-for="(item, index) in list">
    <KeyboardItem
      :desc="item.desc"
      :keys="item.keys"
      :is-first="index === 0"
      :is-last="index === list.length - 1"
    />
    <Divider v-if="index !== list.length - 1" class="m-0" />
  </template>
</template>

<script setup lang="ts">
import { detectOS } from "@/utils/system"
import KeyboardItem from "./KeyboardItem.vue"
import Divider from "@/components/common/Divider.vue"
defineOptions({
  name: "KeyboardList",
})

const list = [
  {
    desc: "上一张图片",
    keys: [{ key: "←", square: true }],
  },
  {
    desc: "下一张图片",
    keys: [{ key: "→", square: true }],
  },
  {
    desc: "关闭笔记",
    keys: [{ key: "Esc", square: false }],
  },
  {
    desc: "暂停 / 播放（视频）",
    keys: [{ key: "空格", square: false }],
  },
  {
    desc: "添加到收藏夹",
    keys: [
      { key: detectOS() === "Mac" ? "command" : "Ctrl", square: false },
      { key: "D", square: true },
    ],
  },
]
</script>
