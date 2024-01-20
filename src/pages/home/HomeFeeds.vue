<template>
  <div class="px-8 pt-[72px] overflow-scroll">
    <ChannelContainer />
    <FeedsContainer />
  </div>
</template>

<script setup lang="ts">
import ChannelContainer from "./components/channel/ChannelContainer.vue"
import FeedsContainer from "./components/feed-card/FeedsContainer.vue"
</script>
