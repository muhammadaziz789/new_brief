import { setRegistrationModalOpen } from "store/registrationModal/registrationModal.slice";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CCard } from "components/UI/CCards/CCard";
import CButton from "components/UI/CButton";
import cls from "./style.module.scss";
import CDivider from "components/UI/CDivider";
import { CalendarIcon, ClockIcon, DollerRoundedIcon } from "components/svg";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import CouponComponent from "components/UI/CouponComponent";
import { useEffect, useState } from "react";
import { websiteActions } from "store/website/websiteSlice";
import { UseTimeZoneConverter } from "utils/UseTimeZoneCoverter";

export default function AboutSeminarsRightSide({ seminar }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [currentDate, setCurrentDate] = useState("");
  const [loading, setLoading] = useState(false);

  function handleModalAction(element) {
    if (element?.is_auth) {
      router.push(`/order/${element?.id}?slug=${element?.slug}`);
    } else dispatch(setRegistrationModalOpen("default"));
  }

  function handleVidoePlay(videoId) {
    dispatch(websiteActions.setYoutubeVideoModal({ id: videoId, open: true }));
  }

  useEffect(() => {
    if (!seminar?.started_at_utc) return;

    setCurrentDate(UseTimeZoneConverter(seminar?.started_at_utc));
  }, [seminar]);

  return (
    <div className={cls.cardWrapper}>
      <CCard classes="py-[24px] sm:p-5 p-[10px]">
        <List className={cls.list}>
          <ListItem className={cls.listItem}>
            <div className={cls.content}>
              <CalendarIcon />
              <p className={cls.text}>{t("starting_time")}:</p>
            </div>
            <span className={cls.time}>
              {currentDate ? currentDate : seminar?.started_at}
            </span>
          </ListItem>
          <CDivider />
          <ListItem className={cls.listItem}>
            <div className={cls.content}>
              <ClockIcon />
              <p className={cls.text}>{t("duration")}</p>
            </div>
            <span className={cls.time}>{seminar?.duration}</span>
          </ListItem>
          <CDivider />
          <ListItem className={cls.listItem}>
            <div className={cls.content}>
              <DollerRoundedIcon />
              <p className={cls.text}>{t("cost")}</p>
            </div>
            <span
              className={`${cls.time} ${
                seminar?.is_purchased ? "text-success" : "text-dark"
              }`}
            >
              {seminar?.price} UZS
            </span>
          </ListItem>
          {<CDivider spacing="20px 0 24px 0" />}
        </List>
        {seminar?.is_purchased ? (
          <div className="mt-[15px]">
            <button
              // onClick={() => handleVidoePlay(seminar?.video_id)}
              className=" w-full h-[56px] font-bold normal-case text-dark rounded-[10px] bg-yellowLight hover:bg-yellowLight"
            >
              <p className="font-[600]">
                {t(seminar?.type === "live" ? "watch_seminar" : "watch_course")}
              </p>
            </button>
          </div>
        ) : (
          <>
            <CouponComponent
              name="coupon"
              seminar={seminar}
              errors={errors}
              setErrors={setErrors}
              setLoading={setLoading}
            />
            <div className="mt-[15px]">
              <CButton
                text={"buy"}
                classes="w-full h-[56px] font-bold text-base"
                disabled={errors?.coupon || loading}
                handleClick={() => handleModalAction(seminar)}
              />
            </div>
          </>
        )}
      </CCard>
    </div>
  );
}
