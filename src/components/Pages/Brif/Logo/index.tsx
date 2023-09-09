import { FC, useState } from "react";
import { List, ListItem } from "./state";
import Select from "../Visuality/Select";
const LogoStill = ({ text = '' }: { text?: string }) => {
  const [newList, setNewList] = useState<ListItem[]>(List);
  const [active, setActive] = useState(false);

  return (
    <div className="w-full">
      <p>{text}</p>
      <ul className="grid grid-cols-2 space-between gap-5 md:gap-[35px] mt-2">
        {newList?.map((element, index) => (
          <Select
            key={index}
            element={element}
            classes="flex flex-col-reverse gap-2"
            classBox="flex items-center px-4 rounded-[10px] border border-main h-[130px]"
            active={active}
            setActive={setActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default LogoStill;
