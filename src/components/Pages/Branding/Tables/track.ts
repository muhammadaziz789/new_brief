export interface ListItem {
  title: string;
  key: string;
  width?: number;
}

export const headColumnsTrack: ListItem[] = [
  {
    title: "Yuk mashina rusumi",
    key: "name",
  },
  {
    title: "Rangi",
    key: "color",
  },
];

export interface ListItemBody {
  name: string;
  color: string;
  width?: number;
}

export const bodyColumnsTrack: ListItemBody[] = [
  {
    name: "",
    color: "",
  },
  {
    name: "",
    color: "",
  },
  {
    name: "",
    color: "",
  },
  {
    name: "",
    color: "",
  },
  {
    name: "",
    color: "",
  },
];