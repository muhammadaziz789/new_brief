import Link from "next/link";
import styles from "./style.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
export default function LinkGenerator({
  link = "",
  icon,
  text = "",
  classLink,
  textClasses,
  width = "60",
  height = "60",
  translation = "common",
  children,
}) {
  const { t } = useTranslation(translation);
  return (
    <Link href={link}>
      <a className={`${styles.link} gap-2 ${classLink}`}>
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
                className={`${styles.text} text-sm font-semibold text-baseBlack ${textClasses}`}
              >
                {t(text, `${translation}:${text}`)}
              </p>
            )}
          </div>
        )}
      </a>
    </Link>
  );
}
