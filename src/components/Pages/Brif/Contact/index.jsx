import CCheckbox from "components/UI/CElements/CCheckbox";
import { useState } from "react";

const ContactInfo = ({
  text,
  text_area = false,
  select = false,
  list_select = [],
  handleChange,
  name,
  handleValues,
  initName,
}) => {
  const [list, setList] = useState(list_select);

  const handleCheck = (el) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      } else item.active = false;
      return { ...item };
    });

    const selected = result.find((i) => i.active);
    handleValues(initName, name, selected.key);

    setList(result);
  };

  return (
    <div className="w-full">
      {text ? <p>{text}</p> : ""}
      {text_area && (
        <textarea
          className="border border-main rounded-[4px] w-full mt-2 p-2"
          rows={3}
          onChange={(e) => handleChange(initName, name, e.target.value)}
        />
      )}
      {!text_area && !select && (
        <input
          className="border border-main rounded-[4px] w-full mt-2"
          type="text"
          onChange={(e) => handleChange(initName, name, e.target.value)}
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
