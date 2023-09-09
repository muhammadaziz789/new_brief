import SeminarsFilter from "components/UI/SeminarsFilter/Index";
import LiveVideoList from "./List";
import { useCategory } from "services/categoryService";
import { useMemo } from "react";
import useTranslation from "next-translate/useTranslation";
export default function LiveSeminarsWrapper() {
  const { lang } = useTranslation("common");
  const { categories } = useCategory({
    categoriesParams: {
      per_page: 100,
      type: "live",
    },
    lang,
  });

  const tabList = useMemo(() => {
    const res = categories?.categories?.map((item, ind) => ({
      index: ind + 1,
      ...item,
    }));
    if (categories?.categories?.length) {
      res.unshift({ index: 0, id: 0, name: "all", slug: "all" });
    }
    return res;
  }, [categories]);

  return (
    <>
      <SeminarsFilter title="live-seminars" type="seminar" />
      <LiveVideoList tabList={tabList ?? []} type="seminar" />
    </>
  );
}
