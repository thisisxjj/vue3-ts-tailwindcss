export declare interface MenuItem {
  href: string;
  name: string;
}

export declare interface MenuListProps {
  transform: string;
  display: string;
  list: Array<MenuItem>;
}

export declare interface MenuButtonProps {
  list: Array<MenuItem>
}
