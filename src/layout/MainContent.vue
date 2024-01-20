<template>
  <div
    class="w-full xxl:pl-maincontent-xxl xl:pl-maincontent-xl lg:pl-maincontent-lg md:pl-maincontent-md sm:pl-0"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MainContent'
})
</script>
