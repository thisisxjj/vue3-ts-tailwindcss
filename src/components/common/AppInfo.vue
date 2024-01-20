<template>
  <div
    class="text-[var(--color-tertiary-label)] padding dark:text-[var(--dark-color-tertiary-label)]"
  >
    <p class="m-0 break-word text-[12px] leading-[140%]">
      <template
        :key="title"
        v-for="({ title, href, name }, index) in icpInfoList"
      >
        <a
          class="text-[var(--color-tertiary-label)] dark:text-[var(--dark-color-tertiary-label)] font-normal"
          :title="title"
          target="_blank"
          :href="href"
        >
          {{ name }}
        </a>
        {{ index !== icpInfoList.length - 1 ? " | " : "" }}
      </template>
    </p>
    <div class="leading-[140%] text-[12px] mt-1">
      <p>© 2014-2023</p>
      <p>行吟信息科技（上海）有限公司</p>
      <p>地址：上海市黄浦区马当路388号C座</p>
      <p>电话：9521-8999</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const icpInfoList = [
  {
    title: "小红书_沪ICP备",
    name: "沪ICP备13030189号",
    href: "https://beian.miit.gov.cn/",
  },
  {
    title: "小红书_营业执照",
    name: "营业执照",
    href: "https://fe-video-qc.xhscdn.com/fe-platform/1315dcf7990709473005051f944bafcc641a879b.pdf",
  },
  {
    title: "小红书_沪公网安备",
    name: "2023沪公网安备31010102002533号",
    href: "https://beian.mps.gov.cn/#/query/webSearch",
  },
  {
    title: "小红书_网文",
    name: "增值电信业务经营许可证：沪B2-20150021",
    href: "https://fe-video-qc.xhscdn.com/picasso-editor/c081c205c927d605c959e3d6e1b22975c8a4b64f.pdf",
  },
  {
    title: "小红书_医疗器械网络交易服务",
    name: "互联网药品信息服务资格证书：(沪)-经营性-2023-0144",
    href: "https://fe-video-qc.xhscdn.com/fe-platform/f37a08cacc088061beb38329c387c32fc48fc6fe.pdf",
  },
  {
    title: "小红书_互联网药品信息服务",
    name: "互联网药品信息服务资格证书：(沪)-经营性-2023-0144",
    href: "https://fe-video-qc.xhscdn.com/fe-platform/f37a08cacc088061beb38329c387c32fc48fc6fe.pdf",
  },
  {
    title: "小红书_上海市互联网举报中心",
    name: "违法不良信息举报电话：(021)6010 9904",
    href: "https://www.shjbzx.cn/",
  },
  {
    title: "网上有害信息举报专区",
    name: "网上有害信息举报专区",
    href: "https://www.12377.cn/",
  },
  {
    title: "小红书_沪公网安备",
    name: "自营经营者信息",
    href: "https://dc.xhscdn.com/06c2adb0-b353-11e9-9d0c-7be9ff8961c1/%E8%87%AA%E8%90%A5%E7%BB%8F%E8%90%A5%E8%80%85%E4%BF%A1%E6%81%AF%E5%85%AC%E7%A4%BA.pdf",
  },
  {
    title: "小红书_网络文化经营许可",
    name: "网络文化经营许可证：沪网文[2021]1545-113号",
    href: "https://fe-video-qc.xhscdn.com/fe-platform/10428eb6a94cd23bd63446b9991cfa3a5ff6f151.pdf",
  },
]
</script>

<style scoped>
.break-word {
  word-break: break-word;
}

.padding {
  padding: 12px;
}
</style>
