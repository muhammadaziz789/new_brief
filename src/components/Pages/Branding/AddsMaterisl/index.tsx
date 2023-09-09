import { FC, useMemo, useState } from "react";
import CHeader from "@/components/UI/CElements/CHeader";
import DocSelect from "@/components/UI/DocSelect";
import { initialListData, ListItem } from './state'


const BrandAddsMaterisl: FC = () => {
  const [list, setList] = useState<ListItem[]>(initialListData);

  const handleCheck = (el: { active: boolean; id: number }) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      } else item.active = false
      return { ...item };
    });

    setList(result);
  };

  return (
    <div className="container">
      <CHeader title="Tashqi reklama materiallari" />
      <ul className="p-2 sm:p-4 grid grid-cols-3 gap-5 sm:gap-10 md:gap-20">
        {list.map((element, index) => (
          <DocSelect key={index} element={element} handleCheck={handleCheck} />
        ))}
      </ul>
    </div>
  );
};

export default BrandAddsMaterisl;
