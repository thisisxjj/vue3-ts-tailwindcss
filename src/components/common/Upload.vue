<template>
  <div class="flex items-center flex-wrap gap-3">
    <template v-for="{ image, file } in fileListPreviews" :key="Math.random()">
      <div
        class="w-upload-width pt-upload h-0 relative rounded-lg border border-solid border-[var(--color-border)] dark:border-[var(--dark-color-border)]"
      >
        <div class="absolute top-0 left-0 w-full h-full">
          <span
            class="w-full h-full visible rounded-[7px] relative inline-block align-middle"
          >
            <span class="block"></span>
            <picture
              v-if="image"
              class="absolute top-0 left-0 w-full h-full rounded-[inherit]"
            >
              <img
                class="absolute top-0 left-0 w-full h-full rounded-[inherit] object-cover border-none"
                :src="image"
                alt=""
              />
            </picture>
            <div
              class="flex items-center justify-center flex-col gap-2 w-full absolute top-0 left-0 h-full rounded-[inherit] text-[14px] text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)]"
            >
              <Icon
                v-if="!image"
                icon="line-md:loading-loop"
                width="18"
                height="18"
              />
              <span v-if="!image" class="">上传中</span>
            </div>
          </span>
        </div>
        <div
          class="flex items-center justify-center absolute top-1 right-1 bg-[var(--material-background)] p-[2px] cursor-pointer text-white backdrop-blur-[10px] w-5 h-5 rounded"
          @click="handleRemovePreview(file)"
        >
          <Icon icon="ic:round-close" />
        </div>
      </div>
    </template>
    <div
      :class="
        cx(
          `
            hover:text-[var(--color-secondary-label)] 
            dark:hover:text-[var(--dark-color-secondary-label)] 
            hover:bg-[var(--color-active-background)] 
            dark:hover:bg-[var(--dark-color-active-background)] 
            relative 
            flex 
            flex-col 
            items-center 
            justify-center 
            w-upload-width 
            pt-upload 
            rounded-lg 
            border 
            border-solid 
            border-[var(--color-border)] 
            dark:border-[var(--dark-color-border)] 
            text-[var(--color-tertiary-label)] 
            dark:text-[var(--dark-color-tertiary-label)] 
            text-[12px] font-normal leading-[120%]
          `
        )
      "
    >
      <div
        class="flex items-center justify-center flex-col gap-[6px] absolute w-full h-full top-0 left-0"
      >
        <div>
          <Icon icon="carbon:image" height="20" width="20" />
        </div>
        <p>上传图片</p>
      </div>
      <input
        :disabled="isDisable"
        ref="inputRef"
        :class="
          cx(
            `
              absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 overflow-hidden
            `,
            isDisable && 'cursor-not-allowed'
          )
        "
        type="file"
        multiple
        accept="image/jpeg,image/jpg,image/png"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { Icon } from "@iconify/vue"
import { cx } from "class-variance-authority"

const props = defineProps<{
  fileList: File[]
  max: number
}>()

const emits = defineEmits<{
  "update:fileList": [fileList: unknown[]]
}>()

const handleChange = (e: Event) => {
  const { files } = e.target as any
  const needToAddFiles: unknown[] = []
  Array.from(files).forEach((file: unknown) => {
    const reader = new FileReader()
    if (fileListPreviews.value.length >= props.max) {
      return
    }

    needToAddFiles.push(file)

    const previewsLength = fileListPreviews.value.push({
      image: "",
      file: null,
    })
    reader.onload = () => {
      // 将图像的预览 URL 添加到数组中
      fileListPreviews.value.splice(previewsLength - 1, 1, {
        image: reader.result as string,
        file: file as File,
      })
    }

    // 读取文件数据
    reader.readAsDataURL(file as File)
  })

  if (props.fileList.length >= props.max) {
    return
  }

  emits("update:fileList", [...props.fileList, ...needToAddFiles])
  // 重置input value 避免无法上传相同的图片
  if (inputRef.value) {
    inputRef.value.value = ""
  }
}

const handleRemovePreview = (removedFile: File | null) => {
  if (!removedFile) return
  // 根据file对象过滤出需要删除的file
  const updatedFiles = props.fileList.filter((file) => file !== removedFile)
  fileListPreviews.value = fileListPreviews.value.filter(
    ({ file }) => file !== removedFile
  )
  emits("update:fileList", updatedFiles)
}

type ImagesPreviews = Array<{
  image: string
  file: File | null
}>

const fileListPreviews = ref<ImagesPreviews>([])
const inputRef = ref<HTMLInputElement | null>(null)
const isDisable = computed(() => props.max === props.fileList.length)
</script>
