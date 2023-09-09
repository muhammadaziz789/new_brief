import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import CButton from "components/UI/CButton";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
export default function InProcessPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <span className="flex flex-col items-center">
        <EngineeringRoundedIcon
          style={{ fontSize: "150px", color: "#FFB800" }}
        />
        <h1 className="text-dark text-2xl font-bold mb-3">
          {t("handling_repearing")}
        </h1>
        <CButton
          handleClick={() => router.push("/")}
          text="back_to_main_page"
        />
      </span>
    </div>
  );
}
