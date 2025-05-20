import { icons } from "./icons";

export enum TAB_TITLES {
  home = 'Home',
  settings = 'Settings',
}

export const TABS_DATA = [
  {
    id: 1,
    icon: icons.home,
    name: 'index',
    title: TAB_TITLES.home,
  },
  {
    id: 2,
    icon: icons.settings,
    name: 'settings',
    title: TAB_TITLES.settings,
  },
];