<template>
  <Modal v-model:visible="helpModalVisible" header="帮助与客服">
    <form
      class="flex w-full gap-5 flex-col justify-center"
      @submit.prevent="handleSubmit"
    >
      <FormItem
        label="问题与意见"
        required
        :max="100"
        :cur-length="question.length"
      >
        <TextArea
          v-model="question"
          placeholder="请填写你的功能建议,感谢你的支持~"
          :disabled="question.length > 100"
        />
      </FormItem>
      <FormItem label="图片" required :max="9" :cur-length="fileList.length">
        <Upload v-model:file-list="fileList" :max="9" />
      </FormItem>
      <FormItem label="联系方式">
        <Input v-model="contact" placeholder="请输入手机号便于联系" />
      </FormItem>
      <div class="flex items-center justify-center w-full">
        <Button variant="primary">提交</Button>
      </div>
    </form>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { storeToRefs } from "pinia"
import Modal from "../common/Modal.vue"
import { useModalToggleStore } from "@/stores/useModalToggleStore"
import FormItem from "../common/FormItem.vue"
import TextArea from "../common/TextArea.vue"
import Upload from "../common/Upload.vue"
import Input from "../common/Input.vue"
import Button from "../button/Button.vue"

defineOptions({
  name: "HelpModal",
})

const store = useModalToggleStore()
const { helpModalVisible } = storeToRefs(store)

const question = ref("")
const fileList = ref<File[]>([])
const contact = ref("")

const handleSubmit = () => {
  // TODO 处理提交帮助的请求
  console.log("处理提交请求", question.value, fileList.value, contact.value)
}
</script>
