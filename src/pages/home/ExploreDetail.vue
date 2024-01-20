<template>
  <div class="pt-[72px]">Explore detail {{ route.path }}</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
</script>
