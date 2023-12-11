import { SidebarMenuItemType } from "@/types"

export declare interface GroupItem {
  icon?: string
  name: string
  newIcon?: boolean
  custom?: boolean
  type?: SidebarMenuItemType
}

export declare interface GroupWrapperProps {
  header?: string
  group: GroupItem[]
  divider?: boolean
}
