import Link from "next/link";
import cls from "./style.module.scss";
import { EastRounded } from "@mui/icons-material";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
export default function SectionHeader({
  title = "title",
  link = {},
  text = "",
  translation = "common",
  classes,
}) {
  const { t } = useTranslation(translation);
  const small = useIsMobile("small");
  return (
    <div
      className={`flex items-center justify-between ${cls.wrapper} ${classes}`}
    >
      <h2 className={cls.title}>{t(title, `${translation}:${title}`)}</h2>
      <p className={cls.text}>{t(text, `${translation}:${text}`)}</p>
      {link?.name && (
        <Link href={link?.href || "/"}>
          <a className={cls.link}>
            {!small ? t(link?.name, `${translation}:${link?.name}`) || "link" : ""}
            <EastRounded />
          </a>
        </Link>
      )}
    </div>
  );
}
