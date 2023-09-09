import CelebrationIcon from "@mui/icons-material/Celebration";
import useTranslation from "next-translate/useTranslation";
import { useSelector } from "react-redux";
export default function CouponBought() {
  const { t, lang } = useTranslation("common");
  const coupon = useSelector((state) => state.order.couponData);
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
    <div className="flex flex-col items-center">
      <CelebrationIcon style={{ fontSize: "120px", color: "#22c55e" }} />
      <h1 className="text-3xl font-bold mt-6 text-success">
        {t("congratulations")}!
      </h1>
      <p className="text-2xl font-bold text-blackLighter mb-5 text-center">
        "{coupon.seminar?.title}"{" "}
        <span className="text-blackLighter font-medium">
          {coupon.seminar?.type == "live"
            ? handleTranslate("seminari")
            : handleTranslate("kursi")}{" "}
          {lang === "uz" ? "xarid qilindi" : "харид қилинди"}
        </span>
      </p>
    </div>
  );
}
