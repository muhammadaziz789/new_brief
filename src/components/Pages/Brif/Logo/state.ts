export interface ListItem {
  id: number;
  image: string;
  active: boolean;
  title: string;
}

export const List: ListItem[] = [
  {
    title: "Konkret logotip",
    image: "/svg/Logo/youtube.svg",
    active: false,
    id: 1,
  },
  {
    title: "Mavhum logotip",
    image: "/svg/Logo/mit.svg",
    active: false,
    id: 2,
  }
];
