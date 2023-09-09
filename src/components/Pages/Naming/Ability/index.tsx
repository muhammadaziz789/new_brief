import { useState } from "react";
import { initialListData, ListItem } from "./state";
import CCheckbox from "@/components/UI/CElements/CCheckbox";

interface Props {
  text: string;
}

const Ability = ({ text }: Props) => {
  const [list, setList] = useState<ListItem[]>(initialListData);

  const handleCheck = (el: { active: boolean; id: number }) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      } else item.active = false;
      return { ...item };
    });

    setList(result);
  };

  return (
    <div className="w-full">
      {text ? <p className="mb-5">{text}</p> : ""}
      <ul className="sm:p-4 grid grid-cols-2 gap-8 md:w-1/2 mx-auto">
        {list.map((item, index) => (
          <CCheckbox key={index} element={item} handleCheck={handleCheck} />
        ))}
      </ul>
    </div>
  );
};

export default Ability;
