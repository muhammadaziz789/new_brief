export interface ListItem {
  text: string;
  active: boolean;
  id: number;
}

export const initialListData: ListItem[] = [
  {
    text: "Ajralib tursin",
    active: false,
    id: 1,
  },
  {
    text: "Ajralib turmasin",
    active: false,
    id: 2,
  }
];
