import cls from "./style.module.scss";
import { StarFilledIcon, StarOutlinedIcon } from "components/svg";
import CCollapse from "components/UI/CCollapse";
import { getSubstring } from "utils/getSubstring";
import { PlayCircleRounded, LockRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useIsMobile } from "hooks/useMobile";
import { CCard } from "components/UI/CCards/CCard";
import Comments from "./Comments";
import useTranslation from "next-translate/useTranslation";
import { websiteActions } from "store/website/websiteSlice";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";
export default function AboutSeminarsLeftSide({
  seminar,
  comantable = false,
  setCamantable = () => {},
}) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const ipod = useIsMobile("ipod");
  const small = useIsMobile("small");
  const { t, lang } = useTranslation("common");
  const [more, setMore] = useState(false);
  const [play, setPlay] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (!seminar?.started_at_utc) return;

    setCurrentDate(UseTimeZoneConverter(seminar?.started_at_utc));
  }, [seminar]);

  const TimeText = useMemo(() => {
    let res = currentDate ? currentDate : seminar?.started_at;
    let second = lang === "uz" ? "Boshlanish vaqti " : "Бошланиш вақти ";
    return second + res;
  }, [currentDate, seminar, lang]);

  return (
    <div className={cls.wrapper}>
      <div className="mt-[-30px] rounded-[12px] overflow-hidden">
        {seminar?.url && seminar?.is_purchased && play && (
          <iframe
            src={seminar?.url}
            width="100%"
            height={small ? "200" : "410"}
            // frameborder="0"
            allow="autoplay; fullscreen"
            autoPlay
            // allowfullscreen
          ></iframe>
        )}
      </div>
      {!play && (
        <span
          className={`${cls.imgWrapper} ${hovered ? cls.active : ""}`}
          onClick={() => {
            if (seminar?.is_purchased) {
              if (comantable) {
                setPlay(true);
              } else {
                dispatch(
                  websiteActions.setAlertData({
                    title: TimeText,
                    translation: "common",
                  })
                );
              }
            }
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={cls.content}>
            <p className="rounded-full text-baseBlack bg-yellowLight h-[37px] inline-flex items-center justify-center text-sm font-medium px-4">
              {seminar?.category}
            </p>
          </div>
          <div className="w-full h-full relative">
            <img
              src={seminar?.image}
              alt={seminar?.image || seminar?.caption + " img"}
              className="rounded-[10px] w-full"
            />
            <div className={`${cls.playBtn}`}>
              {seminar?.is_purchased ? (
                <PlayCircleRounded />
              ) : (
                <LockRounded style={{ color: "white" }} />
              )}
            </div>
          </div>
        </span>
      )}

      <CCard classes="mt-[14px] ipod:mb-4">
        <h1
          className={cls.shortDescription}
          dangerouslySetInnerHTML={{ __html: seminar?.short_description }}
        />
        <p
          onClick={() => setMore((prev) => !prev)}
          className={`${cls.fullDescription} small:mt-3`}
          dangerouslySetInnerHTML={{
            __html:
              getSubstring(seminar?.description, more ? 0 : 200, false) +
              (!more
                ? `<span class="watch_more_btn">${t("watch_more")}</span>`
                : "") +
              (more ? `<span class="watch_less_btn">${t("close")}</span>` : ""),
          }}
        />
      </CCard>
      {!ipod && seminar?.is_purchased && (
        <Comments seminar={seminar} setCamantable={setCamantable} />
      )}

      {/* {seminar?.sections?.length ? (
        <div className="mt-[24px]">
          {seminar.sections.map((item, ind) => (
            <CCollapse
              key={ind}
              open={false}
              element={item}
              handleClick={handleClick}
            />
          ))}
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}
