import { Container } from "@mui/material";
import { useState, useMemo } from "react";
import SeminarsCategories from "./Categories";
import categoryService from "services/categoryService";
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "react-query";
import CSkeleton from "components/UI/CSkeleton";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
export default function Seminars() {
  const { lang } = useTranslation("common");
  const [params, setParams] = useState({
    per_page: 1,
    page: 1,
    type: "lifeless",
  });
  const [categoriesList, setCategoriesList] = useState([]);
  const ipod = useIsMobile("ipod");
  const small = useIsMobile("small");

  const { data: categories } = useQuery(
    [`GET_CATEGORIES`, params, lang],
    () => {
      return categoryService.getCategories(params);
    },
    {
      onSuccess: (data) => {
        setTimeout(() => {
          getCategory(
            {
              ...data?.categories[0],
              seminarList: [],
              mostHighIndex: [0],
            },
            { page: 1 }
          );
        }, 500);
      },
    }
  );

  function getCategory(currentCategory) {
    if (!currentCategory?.slug) return
    categoryService
      .getCategory(currentCategory.slug, {
        per_page: 5,
        page: 1,
      })
      .then((res) => {
        if (!currentCategory.seminarList.includes(...res?.seminars)) {
          currentCategory.seminarList.push(...res?.seminars);
        }

        if (params.page < 2) {
          setCategoriesList([currentCategory]);
        } else {
          setCategoriesList((prev) => [...prev, currentCategory]);
        }
      });
  }

  function getCategoryHorizantalScroll(currentCategory, props) {
    categoryService
      .getCategory(currentCategory.slug, {
        per_page: 5,
        page: props.page,
      })
      .then((res) => {
        if (
          res?.seminars?.length &&
          !currentCategory.seminarList.includes(...res?.seminars)
        ) {
          currentCategory.seminarList.push(...res?.seminars);
        }
      });
  }

  const handleScroll = () => {
    const page = params.page++;
    const prmt = { ...params, page: page + 1 };
    setParams(prmt);
  };

  const hasMore = useMemo(() => {
    if (categories?.meta?.total <= categoriesList?.length) {
      return false;
    } else return true;
  }, [categories, categoriesList]);

  const ExtraSkeleton = () => (
    <div className="mt-[80px]">
      <CSkeleton isArray={false} width={ipod ? "100%" : "40%"} height={40} />
      <CSkeleton
        classes="grid-cols-1 small:grid-cols-2 ipod:grid-cols-3 gap-[34px] mt-[40px]"
        count={small ? 1 : ipod ? 2 : 3}
        height={400}
      />
    </div>
  );

  return (
    <Container>
      <InfiniteScroll
        dataLength={categoriesList?.length || 1}
        style={{ overflow: "visible" }}
        next={() => {
          handleScroll();
        }}
        hasMore={hasMore}
        loader={<ExtraSkeleton />}
      >
        {categoriesList?.map((item, index) => (
          <SeminarsCategories
            key={index}
            category={item}
            getCategoryHorizantalScroll={getCategoryHorizantalScroll}
          />
        ))}
      </InfiniteScroll>
    </Container>
  );
}
