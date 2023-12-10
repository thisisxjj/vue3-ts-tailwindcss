<template>
  <header
    class="fixed z-10 px-8 flex items-center justify-between h-[var(--header-height)] w-full max-w-[1728px] backdrop-blur-[20px] bg-[var(--mask-paper)] dark:bg-[var(--dark-mask-paper)]"
  >
    <Logo />
    <Search
      v-model="search"
      @clear="handleClearSearch"
      @search="handleSearch"
    />
    <Menu />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Logo from "../components/logo/Logo.vue"
import Search from "../components/search/Search.vue"
import Menu from "../components/menu/Menu.vue"

const search = ref("")

const handleClearSearch = () => (search.value = "")

const handleSearch = (e: Event) => console.log("search", e)
</script>
