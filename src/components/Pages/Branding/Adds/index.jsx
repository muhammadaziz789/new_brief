import CHeader from "components/UI/CElements/CHeader";
import DocSelect from "components/UI/DocSelect";
import { useState } from "react";
import { initialListData } from "./state";

const BrandAdds = ({ name, setValue }) => {
  const [list, setList] = useState([...initialListData]);

  const handleCheck = (el) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      }
      return { ...item };
    });

    const actives = list.filter((i) => i.active) ?? [];
    setValue(name, actives);
    setList(result);
  };

  return (
    <div className="container">
      <CHeader title="Bosma reklama materiallari" />
      <ul className="p-2 sm:p-4 grid grid-cols-3 gap-5 sm:gap-10 md:gap-20">
        {list.map((element, index) => (
          <DocSelect key={index} element={element} handleCheck={handleCheck} />
        ))}
      </ul>
    </div>
  );
};

export default BrandAdds;
