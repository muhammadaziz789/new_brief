import { Swiper, SwiperSlide } from "swiper/react";
import { SeminarsCard } from "../CCards/SeminarsCard";
import { AboutCard } from "../CCards/AboutCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import cls from "./style.module.scss";

export default function CSlider({
  type = "",
  clickable = true,
  element = "",
  slidesPerView = 3,
  spaceBetween = 32,
  cateGoryName = "",
  swiperList = [],
  onSlideChange = () => {},
  children,
}) {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1030: {
      slidesPerView: 3,
    },
  };
  switch (element) {
    case "waiting-seminars":
      return (
        <Swiper
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
          onSlideChange={(e) => {
            onSlideChange(e?.activeIndex + 1);
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={`swiperMain ${cls.swiper}`}
        >
          {swiperList?.map((item, ind) => (
            <SwiperSlide key={item?.id || ind}>
              <SeminarsCard
                element={item}
                link={`/about-seminars/${item.slug}`}
                cateGoryName={cateGoryName}
                type={type}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    case "seminars":
      return (
        <Swiper
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
          onSlideChange={(e) => onSlideChange(e?.activeIndex + 1)}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={`swiperMain ${cls.swiper}`}
        >
          {swiperList?.map((item, ind) => (
            <SwiperSlide key={item?.id || ind}>
              <SeminarsCard
                element={item}
                link={`/about-seminars/${item.slug}`}
                cateGoryName={cateGoryName}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    case "about":
      return (
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className={`swiperMain ${cls.swiper}`}
        >
          {swiperList?.map((item, ind) => (
            <SwiperSlide key={ind}>
              <AboutCard element={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    default:
      return (
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          modules={[Pagination]}
          pagination={{
            clickable: clickable,
          }}
          className={`swiperMain ${cls.swiper}`}
        >
          {children || "swiper slide"}
        </Swiper>
      );
  }
}
