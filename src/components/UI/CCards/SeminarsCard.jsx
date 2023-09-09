import { useRouter } from "next/router";
import cls from "./style.module.scss";
import { getSubstring } from "utils/getSubstring";
import CSkeleton from "../CSkeleton";
import useTranslation from "next-translate/useTranslation";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";
import { useEffect, useState } from "react";
export function SeminarsCard({
  element,
  classes,
  type = "",
  link = "/",
  cateGoryName = "",
}) {
  const router = useRouter();
  const { t } = useTranslation("seminars");
  const [currentDate, setCurrentDate] = useState("");
  function handleRoute(e) {
    e.preventDefault();
    router.push(link);
  }

  useEffect(() => {
    if (!element?.started_at_utc) return;

    setCurrentDate(UseTimeZoneConverter(element?.started_at_utc));
  }, [element]);
  return (
    <div
      onClick={(e) => handleRoute(e)}
      className={`bg-white rounded-[10px] oferflow-hidden cursor-pointer ${cls.cardShadow} ${classes}`}
    >
      <div className="h-[244px] overflow-hidden rounded-t-[10px]">
        {element.image || element.caption ? (
          <img
            src={element.image || element.caption}
            alt={element.image + " img alt"}
            className="object-cover hover:scale-105 duration-200 w-full"
          />
        ) : (
          <CSkeleton isArray={false} />
        )}
      </div>
      <div className="py-[18px] px-5 small:px-[25px] divide-y divide-border">
        <div className="h-[110px] overflow-hidden">
          <p className="rounded-full text-white bg-ink h-[37px] inline-flex items-center justify-center text-sm font-medium px-4">
            {getSubstring(cateGoryName, 14)}
          </p>
          <h2 className="mt-3 h-[60px] text-lg small:text-2xl text-dark font-bold">
            {getSubstring(element?.title, 40)}
          </h2>
        </div>
        <div className="pt-4 mt-4 flex items-center justify-between min-h-[50px] overflow-hidden">
          <div className="flex flex-col">
            <span className="text-gray font-medium text-sm">{t("price")}:</span>
            <span
              className={`small:text-xl font-bold ${
                element?.is_purchased ? "text-success" : "text-dark"
              }`}
            >
              {element?.price}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray font-medium text-sm">
              {t("start_time")}:
            </span>
            <span className="small:text-xl text-dark font-bold text-right">
              {type === "seminar"
                ? currentDate?.substring(0, 18)
                : currentDate?.substring(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
