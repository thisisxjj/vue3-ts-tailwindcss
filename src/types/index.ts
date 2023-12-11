export type ThemeType = "system" | "light" | "dark"

export enum SidebarMenuItemTypeEnum {
  About = "ABOUT",
  Privacy = "PRIVACY",
  Help = "HELP",
  Shortcut = "SHORTCUT",
  AddToDesk = "ADD_TO_DESK",
  SmallWindow = "SMALL_WINDOW",
  Logout = "LOGOUT",
}

export type SidebarMenuItemType = `${SidebarMenuItemTypeEnum}`
