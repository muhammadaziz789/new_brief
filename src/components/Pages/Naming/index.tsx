import { FC } from "react";
import Main from "./Main";
import DocumentSelect from "./Documents";
import NameType from "./NameType";
import Ability from "./Ability";

import { Document, Page } from "@react-pdf/renderer";

import Textarea from "@/components/UI/Textarea";
import Languages from "./Languages";
import Separate from "./Separate";

const NamingWrapper: FC = () => {
  const list = [
    {
      text: "Qaysi brend nomlari sizga yoqadi va nega?",
      subtext:
        "(Mahsuloti yaxshi bo'lmasada ammo brend nomi yoqsa uni ham yozing)",
    },
    {
      text: "Qaysi brend nomlari sizga yoqmaydi va nega?",
      subtext:
        "(Mahsuloti yaxshi bo'lsada ammo brend nomi yoqmasa uni ham yozing)",
    },
    {
      text: "Kompaniyaning nomi qaysi tilda bo'lishini istaysiz?",
      subtext: "",
    },
    {
      text: "Nom qanday xususiyatlarga ega bo'lishini istaysiz?",
      subtext: "",
    },
    {
      text: "Nom quyidagi qaysi turda bo'lishini istaysiz?",
      subtext: "",
    },
    {
      text: "Nom qanday ma'noni ifodalashini istaysiz? (Faqatgina 2ta so'z)",
      subtext: "",
    },
    {
      text: "Kompaniya nomida qadriyatlaringiz aks ettirilishini xohlaysizmi?",
    },
    {
      text: "Nom raqobatchilaringiz nomlaridan butunlay ajralib tursinmi?",
    },
  ];

  const getUI = (el: { text?: any; subtext?: string }, index: number) => {
    switch (index) {
      case 1:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Textarea text={el.text} subtext={el.subtext} />
          </div>
        );
      case 2:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Textarea text={el.text} subtext={el.subtext} />
          </div>
        );
      case 3:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Languages text={el.text} />
          </div>
        );
      case 4:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <DocumentSelect text={el.text} />
          </div>
        );
      case 5:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <NameType text={el.text} />
          </div>
        );
      case 6:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Textarea text={el.text} />
          </div>
        );
      case 7:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Ability text={el.text} />
          </div>
        );
      case 8:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Separate text={el.text} />
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <Document>
        <Page size="A5">
          <Main />

          <div className="container flex items-center justify-between mt-5 sm:mt-10 mb-10 sm:mb-20">
            <img
              className="w-[100px] sm:w-auto"
              src="/svg/logo-dark.svg"
              alt="logo"
            />
            <div className="w-1/2">
              <div className="flex items-end gap-1">
                <span className="text-main font-medium">Biznes faoliyati:</span>
                {/* <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div> */}
              </div>
              <div className="flex items-end gap-1">
                <span className="text-main font-medium">Sana:</span>
                {/* <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div> */}
              </div>
              <div className="flex items-end gap-1">
                <span className="text-main font-medium">Imzo:</span>
                {/* <div className="w-[100px] sm:w-[200px] h-[1px] bg-main mb-1"></div> */}
              </div>
            </div>
          </div>

          <div className="container">
            {list.map((el, index) => (
              <div className="mt-8" key={index}>{getUI(el, index + 1)}</div>
            ))}
          </div>

          {/* <BrandAdds />
          <BrandSouviners />
          <BrandInteriers />
          <BrandClothes />
          <BrandAddsMaterisl />

          <BrandTables /> */}

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
        </Page>
      </Document>
    </>
  );
};

export default NamingWrapper;
