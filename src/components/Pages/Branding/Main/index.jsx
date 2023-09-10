import cls from "./style.module.scss";
import Element from "./Element";
import { useMemo } from "react";

const BrandingMain = () => {
  const list = useMemo(() => {
    return [
      {
        title: "Mijozlarni jalb qilish",
        icon: "/svg/get-client.svg",
      },
      {
        title: "Sodiqlikni oshirish",
        icon: "/svg/heart.svg",
      },
      {
        title: "Imidj ustida ishlash",
        icon: "/svg/crown.svg",
      },
      {
        title: "Ma’lumot beruvchi",
        icon: "/svg/i.svg",
      },
      {
        title: "Yo’naltiruvchi",
        icon: "/svg/binded-arrow.svg",
      },
      {
        title: "Himoya qiluvchi",
        icon: "/svg/preserve.svg",
      },
    ];
  }, []);

  return (
    <div className={cls.wrapper}>
      {/* <img
        className={cls.mainImg}
        src="/svg/crown.svg"
        alt="photo"
      /> */}

      <div className={`${cls.content} container`}>
        <img
          className={`${cls.logo} pt-10`}
          src="/svg/logoSite.svg"
          alt="logo"
        />

        <div className={cls.body}>
          <h1 className={cls.title}>BRENDBUK</h1>
          <p className={cls.text}>
            ISHLAB CHIQISH BO’YICHA TOUCHPOINTLAR RO’YXATI
          </p>
        </div>

        <div className={`${cls.footer} pb-10`}>
          <p className={cls.text}>
            Kompaniyangiz identifikatsiyasini tashuvchi touchpointlarning
            funksiyalarini ifodalovchi shartli belgilar:
          </p>

          <div className="flex justify-between">
            <ul className={cls.list}>
              {list.slice(0, 3).map((item, index) => (
                <Element key={index} element={item} />
              ))}
            </ul>
            <ul className={cls.list}>
              {list.slice(3).map((item, index) => (
                <Element key={index} element={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingMain;
