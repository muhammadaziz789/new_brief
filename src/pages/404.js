import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import useTranslation from "next-translate/useTranslation";
import CButton from "components/UI/CButton";
import { useRouter } from "next/router";
export default function Custom404() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-[720px] flex-col gap-5">
      <SentimentDissatisfiedIcon
        style={{ fontSize: "100px", color: "#FFB800" }}
      />
      <div className="text-center">
        <h1 className="mb-4 text-2xl">{t("page_not_found")}</h1>
        <CButton
          handleClick={() => router.push("/")}
          text="back_to_main_page"
        />
      </div>
    </div>
  );
}
