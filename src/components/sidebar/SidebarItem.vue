<template>
  <li
    class="list"
    @click="$emit('click', $event)"
    :class="route.path === link ? 'active-list' : ''"
  >
    <component
      :is="component"
      class="flex w-full h-12 items-center text-xs font-semibold text-[var(--color-tertiary-label)]"
      :to="link"
      :href="link"
      :target="target"
    >
      <Icon
        class="text-[var(--color-primary-label)] dark:text-white"
        :icon="icon"
        width="24"
        height="24"
      />
      <span
        class="text-base ml-3 dark:text-white text-[var(--color-primary-label)]"
      >
        {{ title }}
      </span>
    </component>
  </li>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { computed } from "vue"
import { useRoute } from "vue-router"

defineOptions({
  name: "SidebarItem",
})

defineEmits(["click"])

interface SidebarItem {
  icon: string
  title: string
  link: string
  target?: "_blank" | "_parent" | "_self" | "_top"
}

const props = defineProps<SidebarItem>()

type ComponentType = "router-link" | "a"

const component = computed<ComponentType>(() =>
  props.link.includes("http") ? "a" : "router-link"
)

const route = useRoute()
</script>
<style scoped>
.list {
  @apply pl-4
    text-[var(--color-tertiary-label)]
    min-h-[48px]
    mb-2 flex items-center cursor-pointer;
}

.list:hover,
.active-list {
  @apply bg-[var(--color-active-background)] dark:bg-[var(--dark-color-active-background)]
    rounded-full;
}
</style>
