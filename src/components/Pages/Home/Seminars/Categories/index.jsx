import SectionHeader from "components/UI/SectionHeader";
import useTranslation from "next-translate/useTranslation";
import CSlider from "components/UI/CSlider";
import { getSubstring } from "utils/getSubstring";
import { useState } from "react";

export default function SeminarsCategories({
  category,
  getCategoryHorizantalScroll = () => {},
}) {
  const { t, lang } = useTranslation("common");
  const handlePageChange = (page) => {
    const bigIndex = Math.max(...category?.mostHighIndex, 0);

    if (page > bigIndex) {
      getCategoryHorizantalScroll(category, { page });
    }
    if (!category?.mostHighIndex?.includes(page)) {
      category.mostHighIndex.push(page);
    }
  };

  return (
    <>
      {category?.seminarList?.length ? (
        <>
          <SectionHeader
            title={getSubstring(category?.name, 30)}
            classes="mb-[40px] mt-[80px]"
            link={{
              name: `see_all`,
              href: `/video-courses?slug=${category?.slug}`,
            }}
          />

          <CSlider
            swiperList={category?.seminarList ?? []}
            element={"seminars"}
            onSlideChange={handlePageChange}
            cateGoryName={category?.name}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
