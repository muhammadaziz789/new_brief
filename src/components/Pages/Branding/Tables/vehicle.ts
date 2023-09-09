export interface ListItem {
  title: string;
  key: string;
  width?: number;
}

export const headColumnsVehicle: ListItem[] = [
  {
    title: "Yengil mashina rusumi",
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

export const bodyColumnsVehicle: ListItemBody[] = [
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