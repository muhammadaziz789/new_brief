import styles from "./style.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function CLinkGenerator({
  link = "",
  icon,
  text = "",
  classLink,
  transition = "common",
  textClasses,
  width = "60",
  height = "60",
  children,
}) {
  const { t } = useTranslation(transition);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} gap-2 ${classLink}`}
    >
      {children || (
        <div className={styles.wrapper}>
          {icon && (
            <Image
              src={icon}
              alt={text + "img"}
              width={width}
              height={height}
            />
          )}
          {text && (
            <p
              className={`${styles.text} text-sm font-semibold text-baseBlack ml-2 ${textClasses}`}
            >
              {t(text, `${transition}:${text}`)}
            </p>
          )}
        </div>
      )}
    </a>
  );
}
