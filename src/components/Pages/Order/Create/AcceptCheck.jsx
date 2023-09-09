import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import useTranslation from "next-translate/useTranslation";

export default function OrderCreateAcceptCheck({
  name = "",
  isAgreeError = false,
  orderStateData = {},
  setisAgreeError = () => {},
  setValue = () => {},
  handleClick = () => {},
}) {
  const { lang, t } = useTranslation("common");
  const router = useRouter();
  const [check, setCheck] = useState(false);

  function handleCheckbox() {
    setCheck((prev) => !prev);
  }

  useEffect(() => {
    setValue(name, check);
  }, [check]);

  useEffect(() => {
    if (check) {
      setisAgreeError(false);
    }
  }, [check]);

  useEffect(() => {
    setCheck(orderStateData?.is_agreed);
  }, [orderStateData])

  return (
    <div className="flex gap-2 cursor-pointer mt-5 mb-8 relative">
      <span
        onClick={(e) => {
          e.preventDefault();
          handleCheckbox();
        }}
        className={`border rounded-[5px] w-5 h-5 flex items-center justify-center ${
          check
            ? "border-primary"
            : isAgreeError
            ? "border-error"
            : "border-grayFifthLigher"
        }`}
      >
        {check && <CheckIcon style={{ color: "#5086ec", fontSize: "16px" }} />}
      </span>
      <p
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
          router.push("/offer");
        }}
        className="text-dark text-sm font-medium relative"
      >
        {lang === "uz" ? (
          <span>
            Men <span className="text-ink">foydalanish shartlari</span> bilan
            tanishdim
          </span>
        ) : (
          <span>
            Мен <span className="text-ink">фойдаланиш шартлари</span> билан
            танишдим
          </span>
        )}
        <span className="absolute -right-3 text-error">*</span>
      </p>
      {isAgreeError && (
        <p className="text-error text-[12px] extraSmall:text-sm absolute -bottom-5 left-0">
          {t("itis_required_to_know_uses_cases")}
        </p>
      )}
    </div>
  );
}
