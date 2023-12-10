<template>
  <div
    class="mx-auto bg-white dark:bg-[var(--dark-color-background)] min-w-[320px] max-w-[1728px] overflow-hidden"
  >
    <Header></Header>
    <Main>
      <Sidebar />
      <MainContent>
        <RouterView />
      </MainContent>
    </Main>
  </div>
</template>

<script setup lang="ts">
import Header from "./layout/Header.vue"
import Main from "./layout/Main.vue"
import Sidebar from "./layout/Sidebar.vue"
import MainContent from "./layout/MainContent.vue"
</script>
