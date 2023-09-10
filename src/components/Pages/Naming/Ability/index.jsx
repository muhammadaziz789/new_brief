import { useState } from "react";
import { initialListData } from "./state";
import CCheckbox from "components/UI/CElements/CCheckbox";

const Ability = ({ text }) => {
  const [list, setList] = useState([...initialListData]);

  const handleCheck = (el) => {
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
