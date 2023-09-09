import { Container } from "@mui/material";
import cls from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { LiveSection } from "./LiveSection";
import BannerStatistics from "../Statistics";

export const Contents = ({ podcast, statistics = {} }) => {
  const { t, lang } = useTranslation("common");

  return (
    <Container className={cls.contentsContainer}>
      <div className={cls.contens}>
        <span className={`${cls.wrapper} flex w-full justify-between`}>
          <div className={`${cls.left}`}>
            <h1 className={cls.title}>
              {lang === "uz" ? (
                <span>
                  Abdukarim <span className="text-[#8f6903]">Mirzayev</span>{" "}
                  bilan suhbat va seminarlar
                </span>
              ) : (
                <span>
                  Aбдукарим <span className="text-[#8f6903]">Мирзаев</span>{" "}
                  билан суҳбат ва семинарлар
                </span>
              )}
            </h1>
            <p className={`${cls.text} w-[490px] mt-[20px]`}>
              {t("main_text")}
            </p>
            <BannerStatistics statistics={statistics} />.
          </div>
          <div className={cls.right}>
            <img src="/images/owner3.png" alt="owner" />
          </div>
        </span>
        {podcast && <LiveSection podcast={podcast} />}
      </div>
    </Container>
  );
};
