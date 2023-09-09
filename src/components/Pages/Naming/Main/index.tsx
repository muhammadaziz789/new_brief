import { FC } from "react";
import cls from "./style.module.scss";
import Element from './Element'
const Main: FC = () => {
  const list = [
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

  return (
    <div className={cls.wrapper}>
      {/* <img
        className={cls.mainImg}
        src="https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg"
        alt="photo"
      /> */}

      <div className={`${cls.content} container py-10`}>
        <img className={cls.logo} src="/svg/logoSite.svg" alt="logo" />

        <div className={cls.body}>
          <h1 className={cls.title}>NEYMING</h1>
          <p className={cls.text}>
            ISHLAB CHIQISH BO’YICHA BRIF
          </p>
        </div>

        <div className={cls.footer}>
          <p className={cls.text}>
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
