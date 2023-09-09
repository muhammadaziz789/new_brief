export interface ListItem {
  title: string;
  key: string;
  width?: any;
}

export const headColumns: ListItem[] = [
  {
    title: "Biznesingiz uchun qo’shimcha touchpointlar",
    key: "name"
  }
];

export interface ListItemBody {
  name: string;
  color: string;
  width?: number;
}

export const bodyColumns: ListItemBody[] = [
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