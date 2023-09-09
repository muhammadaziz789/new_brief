import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
export default function MultipleBreadCrumb({
  list = [],
  translation = "common",
}) {
  const { t } = useTranslation(translation);
  const router = useRouter();
  function handleBack(link) {
    if (link) {
      router.push(link);
    }
  }

  return (
    <div className="flex flex-wrap items-center my-5">
      {list.map((url, ind) => (
        <span
          key={ind}
          onClick={() => handleBack(url?.link)}
          className="cursor-pointer text-grayThirdLigher text-sm flex items-center"
        >
          {url?.iconLeft ? url.iconLeft : ""}
          {t(url.title)}
          {url?.iconRight ? url.iconRight : ""}
        </span>
      ))}
    </div>
  );
}
