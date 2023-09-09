export interface ListItem {
  title: string;
  image: string;
  logos: string[];
  active: boolean;
  id: number;
}

export const initialListData: ListItem[] = [
  {
    title: "Buklet",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/i.svg", "/svg/crown.svg", "/svg/get-client.svg"],
    active: false,
    id: 1,
  },
  {
    title: "Flayer",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/i.svg", "/svg/crown.svg", "/svg/get-client.svg"],
    active: false,
    id: 2,
  },
  {
    title: "Bloknot",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/crown.svg", "/svg/heart.svg"],
    active: false,
    id: 3,
  },
];
