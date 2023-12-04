<template>
  <div class="group inline-block relative">
    <button @mouseenter="handleMouseEnter" class="common-button">
      <span class="flex items-center justify-center font-normal">
        <slot />
      </span>
    </button>
  </div>
  <Teleport to="body">
    <div ref="menuRef" class="h-40 min-w-[192px] translate-x-[-25%] rounded-xl shadow-md bg-red-200 absolute hidden"></div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuRef = ref()
const handleMouseEnter = () => {
  menuRef.value.display = 'block'
}

</script>

<style scoped>

</style>