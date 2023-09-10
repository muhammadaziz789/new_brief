import { useState } from "react";
import DocSelect from "components/UI/DocSelect";
import { initialListData } from "./state";

const DocumentSelect = ({ text, setValue, name }) => {
  const [list, setList] = useState([...initialListData]);

  const handleCheck = (el) => {
    const result = list.map((item) => {
      if (item.id === el.id) item.active = !el.active;

      return { ...item };
    });

    const selected = result.filter((i) => i.active);
    setValue(name, selected);

    setList(result);
  };

  return (
    <div className="w-full">
      {text ? <p className="mb-5">{text}</p> : ""}
      <ul className="sm:p-4 grid grid-cols-2 gap-5 md:gap-[35px]">
        {list.map((element, index) => (
          <DocSelect
            key={index}
            element={element}
            handleCheck={handleCheck}
            classes="flex flex-col-reverse gap-2"
            classBox="border border-main rounded-[4px] h-[120px] flex items-center px-3"
          />
        ))}
      </ul>
    </div>
  );
};

export default DocumentSelect;
