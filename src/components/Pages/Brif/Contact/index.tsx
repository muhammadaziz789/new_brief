import CCheckbox from "@/components/UI/CElements/CCheckbox";
import { useState } from "react";

const ContactInfo = ({
  text,
  text_area = false,
  select = false,
  list_select = [],
}: {
  text?: string;
  text_area?: boolean;
  select?: boolean;
  list_select?: {
    title?: string;
    text?: string;
    active: boolean;
    id: number;
    image?: string;
  }[];
}) => {
  const [list, setList] = useState(list_select);

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
      {text ? <p>{text}</p> : ""}
      {text_area && (
        <textarea
          className="border border-main rounded-[4px] w-full mt-2 p-2"
          rows={3}
        />
      )}
      {!text_area && !select && (
        <input
          className="border border-main rounded-[4px] w-full mt-2"
          type="text"
        />
      )}
      {select && (
        <ul className="p-2 sm:p-4 grid grid-cols-2 gap-8 sm:w-1/2 mx-auto">
          {list.map((item, index) => (
            <CCheckbox key={index} element={item} handleCheck={handleCheck} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactInfo;
