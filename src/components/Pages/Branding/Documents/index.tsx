import { FC, useMemo, useRef, useState } from "react";
import CHeader from "@/components/UI/CElements/CHeader";
import DocSelect from "@/components/UI/DocSelect";
import { initialListData, ListItem } from "./state";
import html2canvas from "html2canvas";

interface Props {
  setText?: Function
}

const BrandDocuments: FC<Props> = ({ setText = () => {} }) => {
  const [list, setList] = useState<ListItem[]>(initialListData);
  const [image, setscreenshotImage] = useState("");
  const componentRef = useRef(null);
  const handleCapture = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current, {
        // allowTaint: true,
        imageTimeout: 2000,
      }).then((canvas) => {
        document.body.appendChild(canvas);
        const screenshotImage = canvas.toDataURL("image/png");
        console.log("Screenshot taken:", screenshotImage);
        setscreenshotImage(screenshotImage);
      });
    }
  };

  const handleCheck = (el: { active: boolean; id: number }) => {
    const result = list.map((item) => {
      if (item.id === el.id) {
        item.active = !el.active;
      }
      return { ...item };
    });
    setText(el.id);
   setTimeout(() => {
    handleCapture()
   }, 3000)
    setList(result);
  };

  return (
    <>
      <div className="container" ref={componentRef}>
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
