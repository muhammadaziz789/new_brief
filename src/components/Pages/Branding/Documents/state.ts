export interface ListItem {
  title: string;
  image: string;
  logos: string[];
  active: boolean;
  id: number;
}

export const initialListData: ListItem[] = [
  {
    title: "Korparativ vizitka",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/i.svg", "/svg/crown.svg"],
    active: false,
    id: 1,
  },
  {
    title: "Individual vizitka",
    image: "/images/branding/corporative/individual.png",
    logos: ["/svg/i.svg", "/svg/crown.svg"],
    active: false,
    id: 2,
  },
  {
    title: "Beydjik",
    image: "/images/branding/corporative/beydjic.png",
    logos: ["/svg/i.svg"],
    active: false,
    id: 3,
  },
  {
    title: "Narx jadvali",
    image: "/images/branding/corporative/payment.png",
    logos: ["/svg/i.svg"],
    active: false,
    id: 4,
  },
  {
    title: "Firma blanki",
    image: "/images/branding/corporative/firm.png",
    logos: ["/svg/i.svg"],
    active: false,
    id: 5,
  },
  {
    title: "Prayslist",
    image: "/images/branding/corporative/playlist.png",
    logos: ["/svg/i.svg"],
    active: false,
    id: 6,
  },
];
