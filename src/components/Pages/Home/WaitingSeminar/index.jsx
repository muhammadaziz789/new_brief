import { Container } from "@mui/material";
import SectionHeader from "components/UI/SectionHeader";
import CSlider from "components/UI/CSlider";
import { useState, useEffect } from "react";
import seminarService from "services/seminars/seminarService";
import CSkeleton from "components/UI/CSkeleton";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
export default function WaitingSeminar({ type = "" }) {
  const { t, lang } = useTranslation("common");
  const [params, setParams] = useState({
    per_page: 5,
    page: 1,
    type: "live",
    status: "upcoming",
  });
  const [seminarList, setSeminarsList] = useState([]);
  const [mostHighIndex, setMostHighIndex] = useState([1]);
  const ipod = useIsMobile("ipod");
  const small = useIsMobile("small");
  const [isloading, setIsloading] = useState(false);
  const getSeminarList = (parameters) => {
    setIsloading(true);
    seminarService
      .getList(parameters)
      .then((res) => {
        if (res?.seminars?.length) {
          if (parameters.page < 2) {
            setSeminarsList(res?.seminars);
          } else {
            setSeminarsList((prev) => [...prev, res?.seminars]);
          }
        }
      })
      .finally(() => setIsloading(false));
  };

  const handlePageChange = (page) => {
    const prmt = { ...params, page: page };
    setParams(prmt);
    if (!mostHighIndex.includes(page)) {
      setMostHighIndex((prev) => [...prev, page]);
    }
    const bigIndex = Math.max(...mostHighIndex, 0);

    if (page > bigIndex) {
      getSeminarList({ ...params, page });
    }
  };

  useEffect(() => {
    if (lang) getSeminarList(params);
  }, [lang]);

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
      {seminarList?.length ? (
        <>
          <SectionHeader
            title="waiting_seminars"
            classes="mb-[40px] mt-10"
            link={{
              name: `see_all`,
              href: "/live-seminars?status=upcoming",
            }}
          />

          <CSlider
            swiperList={seminarList ?? []}
            element={"waiting-seminars"}
            onSlideChange={handlePageChange}
            cateGoryName={t("waiting_seminars")}
            type={type}
          />
        </>
      ) : (
        ""
      )}
      {isloading && <ExtraSkeleton />}
    </Container>
  );
}
