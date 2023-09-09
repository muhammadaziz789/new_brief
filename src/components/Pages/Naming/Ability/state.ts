export interface ListItem {
  text: string;
  active: boolean;
  id: number;
}

export const initialListData: ListItem[] = [
  {
    text: "Aks ettirilsin",
    active: false,
    id: 1,
  },
  {
    text: "Aks ettirilmasin",
    active: false,
    id: 2,
  }
];
