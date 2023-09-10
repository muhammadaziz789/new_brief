import { useEffect, useState } from "react";
import { List } from "./state";
import Select from "../Visuality/Select";

const LogoType = ({ text = "", handleValues, initName, name }) => {
  const [newList, setNewList] = useState([...List]);
  const [active, setActive] = useState([]);

  useEffect(() => {
    handleValues(initName, name, active);
  }, [active]);

  return (
    <div className="w-full">
      <p>{text}</p>
      <p className="mt-2">
        Siz istagan brend imijini ishlab chiqish uchun qaysi turdagi logotipni
        afzal ko’rasiz?
      </p>
      <p className="mt-2">Eslatma! 2 tadan ortiq tanlanmasin.</p>

      <ul className="p-2 sm:p-4 grid grid-cols-2 sm:grid-cols-3 gap-5 md:gap-[35px]">
        {newList?.map((element, index) => (
          <Select
            key={index}
            element={element}
            classes="flex flex-col-reverse gap-2"
            classBox="flex items-center px-4 rounded-[10px] border border-main h-[220px]"
            active={active}
            setActive={setActive}
            multiple={true}
          />
        ))}
      </ul>

      <div className="flex mt-10 flex-col sm:flex-row">
        <div>
          <h4 className="font-medium">Qo’shimcha:</h4>
          <p>
            Siz yana qaysi boshqa brendlarning logotip uslublari muvaffaqiyatli
            deb hisoblaysiz? Va nima uchun ekanligini tushuntiring
          </p>
        </div>
        <textarea
          className="border border-main rounded-[4px] w-full mt-2 p-2"
          cols={6}
          onChange={(e) =>
            handleValues(initName, "successfull_logos", e.target.value)
          }
        ></textarea>
      </div>
    </div>
  );
};

export default LogoType;
