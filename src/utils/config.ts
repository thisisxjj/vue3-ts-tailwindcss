import { SidebarMenuItemTypeEnum } from "@/types"

// 创作中心List
export const cCList = [
  {
    href: "#",
    name: "创作服务",
  },
  {
    href: "#",
    name: "直播管理",
  },
  {
    href: "#",
    name: "电脑直播助手",
  },
]

// 业务合作list
export const bCList = [
  {
    href: "#",
    name: "专业号",
  },
  {
    href: "#",
    name: "推广合作",
  },
  {
    href: "#",
    name: "蒲公英",
  },
  {
    href: "#",
    name: "商家入驻",
  },
  {
    href: "#",
    name: "MCN入驻",
  },
]

// sidebar menu 关于group分组
export const sideBarAboutGroup = (isReverse: boolean) => {
  const list = [
    {
      icon: "ri:arrow-right-s-line",
      name: "关于小红书",
      type: SidebarMenuItemTypeEnum.About,
    },
    {
      icon: "ri:arrow-right-s-line",
      name: "隐私、协议",
      type: SidebarMenuItemTypeEnum.Privacy,
    },
    {
      name: "帮助与客服",
      type: SidebarMenuItemTypeEnum.Help,
    },
  ]

  return {
    group: isReverse ? list.reverse() : list,
  }
}

// sidebar menu 合作group分组
export const sideBarCooperateGroup = {
  group: [
    {
      icon: "ri:arrow-right-s-line",
      name: "创作中心",
      type: SidebarMenuItemTypeEnum.CreationCenter,
    },
    {
      icon: "ri:arrow-right-s-line",
      name: "业务合作",
      type: SidebarMenuItemTypeEnum.BusinessCooperation,
    },
  ],
}

// sidebar menu 访问方式group分组
export const sidebarAccessGroup = {
  header: "访问方式",
  group: [
    {
      name: "键盘快捷键",
      newIcon: true,
      type: SidebarMenuItemTypeEnum.Shortcut,
    },
    {
      name: "添加小红书到桌面",
      newIcon: true,
      type: SidebarMenuItemTypeEnum.AddToDesk,
    },
    {
      name: "小窗模式",
      newIcon: true,
      type: SidebarMenuItemTypeEnum.SmallWindow,
    },
  ],
}

// sidebar menu 设置group分组
export const sidebarSettingGroup = {
  header: "设置",
  group: [
    {
      name: "深色模式",
      custom: true,
    },
    {
      name: "退出登录",
      type: SidebarMenuItemTypeEnum.Logout,
    },
  ],
}

// 隐私、协议的列表链接
export const privacyList = [
  {
    name: "用户协议",
    href: "https://agree.xiaohongshu.com/h5/terms/ZXXY20220331001/-1",
  },
  {
    name: "隐私政策",
    href: "https://agree.xiaohongshu.com/h5/terms/ZXXY20220509001/-1",
  },
  {
    name: "侵权投诉指引",
    href: "https://agree.xiaohongshu.com/h5/terms/ZXXY20230215001/-1",
  },
  {
    name: "社区规范",
    href: "https://agree.xiaohongshu.com/h5/terms/ZXXY20221213003/-1",
  },
  {
    name: "下载小红书 App",
    href: "https://www.xiaohongshu.com/download",
  },
]

// 关于小红书列表链接
export const aboutList = [
  {
    name: "关于我们",
    href: "https://www.xiaohongshu.com/protocols/about",
  },
  {
    name: "新闻中心",
    href: "https://www.xiaohongshu.com/protocols/news",
  },
  {
    name: "社会责任",
    href: "https://www.xiaohongshu.com/protocols/liability",
  },
  {
    name: "加入我们",
    href: "https://job.xiaohongshu.com/?source=official",
  },
  {
    name: "English",
    href: "https://www.xiaohongshu.com/en?source=official",
  },
]

export const breakpointsTailwind = {
  sm: "696px",
  md: "960px",
  lg: "1192px",
  xl: "1424px",
  xxl: "1728px",
}
