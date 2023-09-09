import { useEffect, useState } from "react";
import { useOrder } from "services/order/orderService";
import useTranslation from "next-translate/useTranslation";
import CButton from "components/UI/CButton";
import CelebrationIcon from "@mui/icons-material/Celebration";
import useCountDown from "hooks/useCoundDown";
import { useRouter } from "next/router";
export default function OrderStatusSuccess({ queries }) {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const [seminar, setSeminar] = useState({});
  const currentTime = useCountDown("secunds", 16);
  const { orderSuccess } = useOrder({
    orderSuccessProps: {
      onSuccess: (res) => {
        setSeminar(res?.seminar);
      },
    },
  });

  function handleBackFn(slug) {
    if (!slug) return;
    router.push(`/about-seminars/${slug}`);
  }

  useEffect(() => {
    if (queries?.pg_order_id) {
      const params = { ...queries };
      params.status = undefined;
      orderSuccess.mutate(params);
    }
  }, [queries]);

  useEffect(() => {
    if (currentTime && currentTime < 2 && seminar?.slug) {
      handleBackFn(seminar.slug);
    }
  }, [currentTime, seminar]);

  const handleTranslate = (text) => {
    if (text === "seminari") {
      switch (lang) {
        case "uz":
          return "seminari";
        default:
          return "семинари";
      }
    }
    if (text === "kursi") {
      switch (lang) {
        case "uz":
          return "kursi";
        default:
          return "курси";
      }
    }

    if (text === "seminar") {
      switch (lang) {
        case "uz":
          return "seminar";
        default:
          return "семинар";
      }
    }

    if (text === "kurs") {
      switch (lang) {
        case "uz":
          return "kurs";
        default:
          return "курс";
      }
    }
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-[50vh] xl:w-[500px] text-center mx-auto">
      <CelebrationIcon style={{ fontSize: "120px", color: "#22c55e" }} />
      <h1 className="text-3xl font-bold mt-6 text-success">
        {t("congratulations")}!
      </h1>
      <p className="text-2xl font-bold text-blackLighter">
        "{seminar?.title}"{" "}
        <span className="text-blackLighter font-medium">
          {seminar?.type == "live"
            ? handleTranslate("seminari")
            : handleTranslate("kursi")}{" "}
          {lang === "uz" ? "xarid qilindi" : "харид қилинди"}
        </span>
      </p>
      <p className="mt-8 mb-3 text-center xl:px-10">
        {lang === "uz"
          ? `Siz ${currentTime} soniyadan keyin xarid qilingan`
          : `Сиз ${currentTime} сониядан кейин харид қилинган`}{" "}
        {seminar?.type === "live"
          ? handleTranslate("seminar")
          : handleTranslate("kurs")}
        ga qaytarilasiz {t("soon_you_will_be_redirected_course_page")}
      </p>
      <CButton
        text={"watch_course"}
        classes="h-[56px] font-bold text-base"
        handleClick={() => handleBackFn(seminar?.slug)}
      />
    </div>
  );
}
