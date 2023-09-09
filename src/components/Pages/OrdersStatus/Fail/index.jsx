import { SentimentDissatisfied } from "@mui/icons-material";
import useTranslation from "next-translate/useTranslation";
import CButton from "components/UI/CButton";
import useCountDown from "hooks/useCoundDown";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function OrderStatusFail() {
  const { t, lang } = useTranslation("common");
  const currentTime = useCountDown("secunds", 16);
  const router = useRouter();

  function handleBackFn() {
    router.push("/");
  }

  useEffect(() => {
    if (currentTime && currentTime < 2) handleBackFn();
  }, [currentTime]);

  return (
    <div className="flex justify-center flex-col items-center min-h-[50vh]">
      <SentimentDissatisfied style={{ fontSize: "100px", color: "#FFB800" }} />
      <h1 className="text-3xl font-bold mt-10 text-yellowLight">
        {t("disappointment")}!
      </h1>
      <p className="text-xl font-medium mt-2">
        {t("payment_done_unsuccessfully")}!
      </p>
      <p className="my-8 xl:w-[360px] text-center">
        {lang === "uz"
          ? `Siz ${currentTime} soniyadan so'ng asosiy sahifaga qaytarilasiz!`
          : `Сиз ${currentTime} сониядан сўнг асосий саҳифага қайтариласиз!`}
      </p>
      <CButton
        text={"back_to_main_page"}
        classes="h-[56px] font-bold text-base"
        handleClick={() => handleBackFn()}
      />
    </div>
  );
}
