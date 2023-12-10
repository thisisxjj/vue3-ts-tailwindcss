export declare interface GroupItem {
  icon?: string
  name: string
  newIcon?: boolean
  custom?: boolean
}

export declare interface GroupWrapperProps {
  header?: string
  group: GroupItem[]
  divider?: boolean
}
