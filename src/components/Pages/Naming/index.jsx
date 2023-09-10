import DocumentSelect from "./Documents";
import Languages from "./Languages";
import Main from "./Main";

import Textarea from "components/UI/Textarea";
import NameType from "./NameType";
import Ability from "./Ability";
import Separate from "./Separate";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import useDebounce from "hooks/useDebounce";
import CButton from "components/UI/CButton";

const NamingWrapper = () => {
  const {
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const list = useMemo(() => {
    return [
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
  }, []);

  const handleChange = useDebounce((name, value) => {
    setValue(name, value);
  }, 300);

  const submitForm = () => {
    const data = getValues();
    console.log(data);
  };

  const getUI = (el, index) => {
    switch (index) {
      case 1:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Textarea
              onChange={(e) => handleChange("brand_name", e.target.value)}
              text={el.text}
              subtext={el.subtext}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Textarea
              onChange={(e) =>
                handleChange("dislike_brand_name", e.target.value)
              }
              text={el.text}
              subtext={el.subtext}
            />
          </div>
        );
      case 3:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <Languages name="language" setValue={setValue} text={el.text} />
          </div>
        );
      case 4:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <DocumentSelect
              name="document"
              setValue={setValue}
              text={el.text}
            />
          </div>
        );
      case 5:
        return (
          <div className="flex space-x-3">
            <span>{index}</span>
            <NameType name="name_type" setValue={setValue} text={el.text} />
          </div>
        );
      case 6:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Textarea
              onChange={(e) => handleChange("name_meaning", e.target.value)}
              text={el.text}
            />
          </div>
        );
      case 7:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Ability name="ability" setValue={setValue} text={el.text} />
          </div>
        );
      case 8:
        return (
          <div className="flex space-x-3 w-full">
            <span>{index}</span>
            <Separate name="stand_out" setValue={setValue} text={el.text} />
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <Main />

      <div className="container flex items-center justify-between">
        <img
          className="w-[100px] sm:w-auto mt-5 sm:mt-10"
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
          <div className="mt-8" key={index}>
            {getUI(el, index + 1)}
          </div>
        ))}
      </div>

      <div className="container flex justify-end" style={{ marginTop: "10px" }}>
        <CButton text="Formani jo'natish" handleClick={() => submitForm()} />
      </div>

      {/* <BrandAdds />
          <BrandSouviners />
          <BrandInteriers />
          <BrandClothes />
          <BrandAddsMaterisl />

          <BrandTables /> */}

      <div className="container" style={{ marginTop: "30px" }}>
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

export default NamingWrapper;
