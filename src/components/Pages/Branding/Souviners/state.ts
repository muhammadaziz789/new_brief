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
  {
    title: "Broshyura",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/i.svg", "./svg/crown.svg"],
    active: false,
    id: 4,
  },
  {
    title: "Taklifnoma",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/crown.svg", "./svg/heart.svg"],
    active: false,
    id: 5,
  },
  {
    title: "Bonus karta",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/i.svg", "./svg/crown.svg", "./svg/heart.svg"],
    active: false,
    id: 6,
  },
  {
    title: "Sertifikat",
    image: "/images/branding/corporative/corporative.png",
    logos: ["/svg/crown.svg", "./svg/heart.svg"],
    active: false,
    id: 7,
  },
  {
    title: "Papka",
    image: "/images/branding/corporative/corporative.png",
    logos: ["./svg/i.svg"],
    active: false,
    id: 8,
  },
  {
    title: "Devor kalendar",
    image: "/images/branding/corporative/corporative.png",
    logos: ["./svg/i.svg"],
    active: false,
    id: 9,
  },
  {
    title: "Stol kalendar",
    image: "/images/branding/corporative/corporative.png",
    logos: ["./svg/i.svg"],
    active: false,
    id: 10,
  },
  {
    title: "Skotch",
    image: "/images/branding/corporative/corporative.png",
    logos: ["./svg/i.svg", "/svg/crown.svg", "./svg/heart.svg"],
    active: false,
    id: 11,
  },
  {
    title: "Karobka",
    image: "/images/branding/corporative/corporative.png",
    logos: ["./svg/i.svg", "/svg/crown.svg", "./svg/heart.svg"],
    active: false,
    id: 12,
  },
];
