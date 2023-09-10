import cls from "./style.module.scss";
const Main = () => {
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

      <div className={`${cls.content} container`}>
        <img
          className={`${cls.logo} pt-10`}
          src="/svg/logoSite.svg"
          alt="logo"
        />

        <div className={cls.body}>
          <p className={cls.text}>LOGOTIP ISHLAB CHIQARISH BO'YICHA</p>
          <h1 className={cls.title}>BRIF</h1>
        </div>

        <div className={`${cls.footer} pb-10`}>
          <p className={cls.text}>
            Quyida “Mountain” brending kompaniyasining brend ishlab chiqish
            xizmati bo’yicha savollar anketasi taqdim etilgan. lltimos
            savollarga batafsil javob berishga harakat qiling.
          </p>
          <p className={cls.subtext}>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
