export interface ListItem {
  id: number;
  image: string;
  active: boolean;
  title: string;
}

export const List: ListItem[] = [
  {
    title: "Sohani bildiradigan",
    image: "/svg/LogoStill/gazprom.svg",
    active: false,
    id: 1,
  },
  {
    title: "Sohani bildirmaydigan",
    image: "/svg/LogoStill/air.svg",
    active: false,
    id: 2,
  }
];
