import { useState } from "react";
import { list } from "./state";
import CCheckbox from "components/UI/CElements/CCheckbox";

const Languages = ({ text, setValue, name }) => {
  const [newList, setNewList] = useState([...list]);

  const handleCheck = (el) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      } else item.active = false;
      return { ...item };
    });

    const selected = result.find((i) => i.active);
    setValue(name, selected);
    setNewList(result);
  };

  return (
    <div className="flex flex-col w-full">
      {text ? <p className="mb-5">{text}</p> : ""}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-[10px] space-between w-full">
        {newList.map((item, index) => (
          <CCheckbox key={index} element={item} handleCheck={handleCheck} />
        ))}
      </div>
    </div>
  );
};

export default Languages;
