import cls from "./style.module.scss";
import { Container } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { SeminarsCard } from "components/UI/CCards/SeminarsCard";
import seminarService from "services/seminars/seminarService";
import categoryService from "services/categoryService";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoCoursesTab from "./Tab";
import CSkeleton from "components/UI/CSkeleton";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
export default function VideoCoursesList({ type, tabList = [] }) {
  const [currentTab, setCurrentTab] = useState(0);
  const router = useRouter();
  let queries = { ...router.query };
  const ipod = useIsMobile("ipod");
  const small = useIsMobile("small");
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    per_page: 9,
    page: 1,
    status: router?.query?.status,
    type: "lifeless",
  });

  const getSeminarsList = (prmt) => {
    seminarService
      .getList(prmt)
      .then((response) => {
        setListFn(response?.seminars);
        setTotalCount(response.meta.total);
      })
      .finally(() => setLoading(false));
  };

  const getCategoryList = (slug, prmt) => {
    categoryService
      .getCategory(slug, prmt)
      .then((response) => {
        setListFn(response?.seminars);
        setTotalCount(response.meta.total);
      })
      .finally(() => setLoading(false));
  };

  function setListFn(list) {
    if (params.page < 2) {
      setList(list);
    } else {
      setList((prev) => [...prev, ...list]);
    }
  }

  function getActiveListFn(prmt) {
    if (router.query?.slug) {
      getCategoryList(router.query.slug, prmt);
    } else {
      getSeminarsList(prmt);
    }
  }

  const handleScroll = () => {
    const page = ++params.page;
    const prmt = { ...params, page };
    setParams(prmt);

    setTimeout(() => {
      getActiveListFn(prmt);
    }, 0);
  };

  useEffect(() => {
    if (router?.query?.slug) {
      const category = tabList?.find((item) => item.slug === router.query.slug);
      setCurrentTab(category?.index);
      setCategoryName(category?.name);
    } else {
      setCategoryName(t("all"));
      setCurrentTab(0);
    }

    const prmt = { ...params, page: 1 };
    prmt.sort = router.query?.course_sort;
    prmt.search = router.query?.course_search;
    setParams(prmt);

    if (tabList?.length) {
      setTimeout(() => {
        getActiveListFn(prmt);
      }, 0);
    } else setLoading(false)
  }, [router, tabList]);

  const hasMore = useMemo(() => {
    if (!list?.length && !loading) return false;
    if (list.length >= totalCount) {
      return false;
    } else return true;
  }, [totalCount, list, loading]);

  const ExtraSkeleton = () => (
    <div>
      <CSkeleton
        classes="gap-[34px] mt-[30px] grid-cols-1 small:grid-cols-2 ipod:grid-cols-3"
        count={small ? 1 : ipod ? 2 : 3}
        height={470}
      />
    </div>
  );

  return (
    <Container className="min-h-[100vh]">
      <div className={cls.tabsWrapper}>
        <VideoCoursesTab
          tabList={tabList}
          queries={queries}
          currentTab={currentTab}
        />
      </div>
      {loading ? (
        <ExtraSkeleton />
      ) : list?.length ? (
        <div className={`pb-[74px] mt-[30px] relative`}>
          <InfiniteScroll
            dataLength={list?.length || 1}
            style={{ overflow: "visible" }}
            next={() => {
              handleScroll();
            }}
            hasMore={hasMore}
            loader={<ExtraSkeleton />}
          >
            <div className={`${cls.listGrid}`}>
              {list?.map((item, ind) => (
                <SeminarsCard
                  key={ind}
                  element={item}
                  link={`/about-seminars/${item.slug}`}
                  cateGoryName={categoryName}
                  type={type}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      ) : (
        <div className="flex justify-center pt-20">
          <img
            width={200}
            src="/images/no-data.png"
            alt={t("data_not_available")}
          />
        </div>
      )}
    </Container>
  );
}
