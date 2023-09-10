import { useState } from "react";
import CHeader from "components/UI/CElements/CHeader";
import DocSelect from "components/UI/DocSelect";
import { initialListData } from "./state";

const BrandDocuments = ({ setText = () => {}, setValue, name }) => {
  const [list, setList] = useState(initialListData);

  const handleCheck = (el) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      }
      return { ...item };
    });
    setText(el.id);

    const actives = list.filter((i) => i.active) ?? [];
    setValue(name, actives);
    setList(result);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-lg leading-[20px] sm:text-[24px] mt-[50px] mb-3 text-center font-[600] max-w-7xl leading-1">
          Korporativ stilni tashuvchi touchpointlar ro’yxati
        </h2>
        <CHeader title="Korporativ hujjatlar" />
        <ul className="p-2 sm:p-4 grid grid-cols-3 gap-5 sm:gap-10 md:gap-20">
          {list.map((element, index) => (
            <DocSelect
              key={index}
              element={element}
              handleCheck={handleCheck}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default BrandDocuments;
