import DocSelect from "@/components/UI/DocSelect";
import { FC, useState } from "react";
import Select from "./Select";

interface Props {
  children?: {
    text: string;
    text_area?: boolean;
    select?: boolean;
    list?: {
      title?: string;
      text?: string;
      active: boolean;
      id: number;
      image?: string;
    }[];
  }[];
}

const Visuality: FC<Props> = ({ children = [] }) => {
  const [active, setActive] = useState([]);

  // const GetCurrent = ({ item, index }: { item: {}; index: number }) => {
  //   switch (index) {
  //     case 0:
  //       return (

  //       );
  //   case 1:
  //       return (
  //           <>1</>
  //       )
  //     default:
  //       return;
  //   }
  // };

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
