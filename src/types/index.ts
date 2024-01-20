export type ThemeType = "system" | "light" | "dark"

export enum SidebarMenuItemTypeEnum {
  About = "ABOUT",
  Privacy = "PRIVACY",
  Help = "HELP",
  Shortcut = "SHORTCUT",
  AddToDesk = "ADD_TO_DESK",
  SmallWindow = "SMALL_WINDOW",
  Logout = "LOGOUT",
  CreationCenter = "CREATION_CENTER", // 创作中心
  BusinessCooperation = "BUSINESS_COOPERATION", // 业务合作
}

export type SidebarMenuItemType = `${SidebarMenuItemTypeEnum}`
