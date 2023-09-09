import cls from "./style.module.scss";
import CTab from "components/UI/CTab";
import OptimizeQuery from "utils/optimizeQuery";
import { useRouter } from "next/router";
export default function VideoCoursesTab({
  tabList,
  currentTab = 0,
  queries,
  handleCustomClick = () => {},
}) {
  const router = useRouter();
  function handleTabActions(tab) {
    queries.slug = tab?.slug === "all" ? "" : tab?.slug;

    router.push({
      path: router.pathname,
      query: { ...OptimizeQuery(queries) },
    });
  }

  return (
    <div className={cls.tabs}>
      <div className={cls.tabSide}>
        <CTab
          tabList={tabList}
          value={currentTab}
          handleCustomClick={(tab) => {
            handleTabActions(tab);
            handleCustomClick(tab);
          }}
        />
      </div>
    </div>
  );
}
