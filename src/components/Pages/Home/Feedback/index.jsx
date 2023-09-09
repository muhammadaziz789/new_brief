import { Container } from "@mui/material";
import SectionHeader from "components/UI/SectionHeader";
import CSlider from "components/UI/CSlider";
import customRequestService from "services/customReguests/customRequestService";
import { useQuery } from "react-query";
import useTranslation from "next-translate/useTranslation";
export default function FeedbackSection() {
  const { lang } = useTranslation("common");
  const { data: list } = useQuery(
    [`GET_FEEDBACK_LIST`, lang],
    () => {
      return customRequestService.getFeedbackList();
    },
    {
      enabled: !!lang,
    }
  );

  return (
    <Container>
      <SectionHeader
        title="thoughts_about_us"
        classes="mb-[60px] mt-[80px] flex-col ipod:w-1/2 text-center mx-auto space-y-3"
        text="here_thoughts_about_courses"
      />

      <div className="mobile:px-20">
        <CSlider
          swiperList={list}
          element={"about"}
          slidesPerView={1}
          spaceBetween={0}
        />
      </div>
      <div className="mb-[160px]"></div>
    </Container>
  );
}
