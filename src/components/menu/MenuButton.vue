<template>
  <div class="inline-block relative">
    <button
      ref="buttonRef"
      class="common-button"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <span class="flex items-center justify-center font-normal">
        <slot />
      </span>
    </button>
  </div>
  <Teleport to="body">
    <MenuList
      :list="list"
      :transform="transform"
      :display="dispaly"
      @mouseleave="hanldeMenuListLeave"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import MenuList from './MenuList.vue'
import { MenuButtonProps } from "./type";

defineProps<MenuButtonProps>()

const dispaly = ref<'none' | 'inline-block'>('none')
const translateX = ref(0)
const translateY = ref(0)
const buttonRef = ref<HTMLButtonElement | null>(null)

const handleMouseEnter = () => {
  dispaly.value = 'inline-block';

  const rect = buttonRef.value?.getBoundingClientRect()!
  const maxTransX = document.documentElement.clientWidth - 192 - 12
  const calcTransX = Math.round(rect.x - rect.width / 2)
  
  translateX.value = maxTransX > calcTransX ? calcTransX : maxTransX
  translateY.value = 64
}

const handleMouseLeave = (e: MouseEvent) => {
  const rect = buttonRef.value?.getBoundingClientRect()!
  if (rect.bottom !== e.pageY) {
    dispaly.value = 'none';
  }
}

const hanldeMenuListLeave = () => {
  dispaly.value = 'none'
}

const transform = computed(
  () => `translateX(${translateX.value}px) translateY(${translateY.value}px)`
)

</script>
