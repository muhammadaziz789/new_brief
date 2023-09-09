import { FC, useState } from "react";
import Main from "./Main";
import CHeader from "@/components/UI/CElements/CHeader";
import ContactInfo from "./Contact";
import { list, ListItem } from "./state";
import Business from "./Business";
import Checkbox from "./Business/Checkbox";
import Visuality from "./Visuality";
import LogoType from "./LogoType";
import LogoStill from "./LogoStill";
import Logo from "./Logo";
import CCheckbox from "@/components/UI/CElements/CCheckbox";

const BrifWrapper: FC = () => {
  const [newList, setNewList] = useState<ListItem[]>(list);

  const [checkList, setCheckList] = useState([
    { text: "Ha", active: false, id: 1 },
    { text: "Yo'q", active: false, id: 2 },
  ]);

  const handleCheck = (element: { id: number; active: boolean }) => {
    const result = checkList.map((item) => {
      if (item.id === element.id) {
        item.active = !element.active;
      } else item.active = false;
      return { ...item };
    });

    setCheckList(result);
  };

  const getUI = (
    el: {
      text?: string | any;
      subtext?: string;
      select?: { text: string; active: boolean; id: number }[];
      child?: {
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
    },
    index: number
  ) => {
    switch (index) {
      case 1:
        return (
          <>
            <p className="mb-2">
              <span>{index}. </span> {el.text}
            </p>
            {el.child?.map((item, ind) => (
              <div className="flex space-x-3 mt-4">
                <span>
                  {index}.{ind + 1}
                </span>
                <ContactInfo
                  text={item?.text}
                  text_area={item.text_area}
                  select={item.select}
                  list_select={item.list}
                />
              </div>
            ))}
          </>
        );
      case 2: {
        return (
          <>
            <p className="mb-2">
              <span>{index}. </span> {el.text}
            </p>
            {el.child?.map((item, ind) => (
              <div className="flex space-x-3 mt-4">
                <span>
                  {index}.{ind + 1}
                </span>
                <Business text={item.text} />
              </div>
            ))}
          </>
        );
      }
      case 3: {
        return (
          <>
            <CHeader
              title="Vizual identifikatsiya bo’limi"
              classes="w-[260px] mx-auto text-center mb-6"
            />
            <div className="flex items-center justify-between">
              <p className="mb-2">
                <span>{index}.0 </span> {el.text}
              </p>
              <Checkbox text={el?.select?.[0]?.text} />
            </div>
            {el.child?.map((item, ind) => (
              <div className="flex space-x-3 mt-4 mb-8">
                <span>
                  {index}.{ind + 1}
                </span>
                {ind === 0 && <Visuality children={el.child} />}
                {ind === 1 && <Business text={item.text} />}
                {ind === 2 && <LogoType text={item.text} />}
                {ind === 3 && <LogoStill text={item.text} />}
                {ind === 4 && <Logo text={item.text} />}
              </div>
            ))}
          </>
        );
      }
      case 4: {
        return (
          <>
            <p className="mb-2">
              <span>{index}.0 </span> {el.text}
            </p>

            {el.child?.map((item, ind) => (
              <div className="mt-2">
                <div className="flex justify-between flex-col sm:flex-row sm:space-y-0 space-y-2">
                  <p>
                    {index}.{ind + 1} {item.text}
                  </p>
                  {ind === 1 && (
                    <div className="flex space-x-4">
                      {checkList.map((check, ind) => (
                        <div>
                          <CCheckbox
                            element={check}
                            handleCheck={handleCheck}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <textarea
                  className="border border-main rounded-[4px] w-full mt-2 p-2 resize-none sm:mx-6"
                  rows={1}
                />
              </div>
            ))}
          </>
        );
      }
      default:
        return "";
    }
  };

  return (
    <>
      <Main />

      <div className="container flex items-center justify-between mt-5 sm:mt-10 mb-10 sm:mb-20">
        <img
          className="w-[100px] sm:w-auto"
          src="/svg/logo-dark.svg"
          alt="logo"
        />
        <div className="w-[60%] sm:w-1/2 border border-main rounded-[4px] p-3">
          <div className="flex items-center gap-1">
            <img src="/svg/warn.svg" alt="warn" />
            <span className="text-main font-medium text-sm sm:text-base">
              Eslatma
            </span>
          </div>
          <div className="flex items-start gap-1 mt-2 sm:mt-4">
            <div className="w-[10px] mt-2 ml-1">
              <div className="w-[10px] h-[10px] bg-[#0F55A0] rounded-[4px] rotate-[45deg]"></div>
            </div>
            <span className="text-main font-medium text-[12px] sm:text-sm">
              Ushbu savollar ro'yxati loyihani muvaffaqiyatli boshlashimizga
              yordam beradi.
            </span>
          </div>
          <div className="flex items-start gap-1 mt-1 sm:mt-4">
            <div className="w-[10px] mt-2 ml-1">
              <div className="w-[10px] h-[10px] bg-[#0F55A0] rounded-[4px] rotate-[45deg]"></div>
            </div>
            <span className="text-main font-medium text-[12px] sm:text-sm">
              Brifni to’ldirish mobaynida savollar tug’ilsa, so’rashingizni
              iltimos qilamiz.{" "}
            </span>
          </div>
        </div>
      </div>

      <CHeader
        title="Ma’muriy bo’lim"
        classes="w-[160px] text-center font-medium mx-auto"
      />

      <div className="container">
        {newList.map((el, index) => (
          <div className="mt-8" key={index}>
            {getUI(el, index + 1)}
          </div>
        ))}
      </div>

      <div className="container mt-10">
        <h3 className="text-lg leading-[20px] sm:text-2xl md:text-[32px] font-[600] text-center">
          Siz bilan hamkorlik <br /> qilishdan mamnunmiz!
        </h3>

        <div className="flex items-center justify-between mt-5 sm:mt-10 mb-10 sm:mb-20">
          <img
            className="w-[100px] sm:w-auto"
            src="/svg/logo-dark.svg"
            alt="logo"
          />
          <div>
            <div className="flex items-end gap-1">
              <span className="text-main font-medium">Sana:</span>
              <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div>
            </div>
            {/* <div className="flex items-end gap-1 mt-2">
                  <span className="text-main font-medium">Imzo:</span>
                  <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrifWrapper;
