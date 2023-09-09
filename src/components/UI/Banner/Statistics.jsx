import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";
import cls from "./style.module.scss";
export default function BannerStatistics({ statistics = { statistics } }) {
  const { t } = useTranslation("common");
  const list = useMemo(() => {
    if (!statistics) return [];
    let res = [];
    for (let val in statistics) {
      const data = {
        title: val,
        value: statistics[val],
      };
      res.push(data);
    }
    return res;
  }, [statistics]);

  return (
    <div className={`${cls.statistics} mt-[30px] 2xl:mt-[100px]`}>
      {list?.map((item) => (
        <div key={item.value} className={cls.item}>
          <span className={cls.num}>{item.value}</span>
          <span className={cls.text}>{t(item.title)}</span>
        </div>
      ))}
    </div>
  );
}
