import { useState } from "react";
import Select from "./Select";

const Visuality = ({ children = [] }) => {
  const [active, setActive] = useState([]);

  return (
    <div className="w-full">
      <p>Logotipingiz qanday rangda bo’lsin?</p>
      {children?.map((item, index) => (
        <>
          {/* <p>{item.text}</p> */}
          <ul className="sm:p-4 grid grid-cols-2 gap-5 md:gap-[35px]">
            {item.list?.map((element, index) => (
              <Select
                key={index}
                element={element}
                classes="flex flex-col-reverse gap-2"
                classBox="flex items-center px-0"
                active={active}
                setActive={setActive}
                multiple={true}
              />
            ))}
          </ul>
        </>
      ))}
    </div>
  );
};

export default Visuality;
