import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { DoubleChevronIcons } from "../DoubleChevronIcons";
export default function CBreadCrumb({
  where = "main_page",
  current = "/",
  translation = "common",
  classes,
  back = false,
  children,
}) {
  const { t } = useTranslation(translation);
  const router = useRouter();
  function handleBack() {
    if (back) {
      router.back();
    } else router.push("/");
  }
  return (
    <>
      {children || (
        <div className={`flex items-center text-sm font-medium ${classes}`}>
          <span
            onClick={() => handleBack()}
            className="cursor-pointer text-darkBase"
          >
            {t(where)}
          </span>
          <DoubleChevronIcons />
          <span className="text-grayThirdLigher">{t(current, `${translation}:${current}`)}</span>
        </div>
      )}
    </>
  );
}
