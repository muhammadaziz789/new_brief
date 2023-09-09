import BannerDesktop from "./Desktop";
import BannerMobile from "./Mobile";
import { useIsMobile } from "hooks/useMobile";
import cls from "./style.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import customRequestService from "services/customReguests/customRequestService";
import CSkeleton from "../CSkeleton";
import { Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
export default function Banner() {
  const { lang } = useTranslation("common");
  const minDesktop = useIsMobile("minDesktop");
  const [isLoading, setIsloading] = useState(true);
  const mobile = useIsMobile("mobile");

  const { data: podcast } = useQuery(["GET_PODCAST"], () => {
    return customRequestService.getPodcast();
  });

  const { data: statistics } = useQuery(["GET_STATISTICS"], () => {
    return customRequestService.getStatistics();
  });

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  const ExtraSkeleton = () => {
    return (
      <Container className="mt-[50px] mobile:mt-[100px] flex justify-center flex-col">
        <CSkeleton
          isArray={false}
          width={mobile ? "100%" : "55%"}
          height={300}
        />
        <div className="mt-10 w-full mobile:w-[55%]">
          <CSkeleton classes="grid-cols-3" height={60} />
        </div>
        <div className="mt-14 flex justify-center">
          <CSkeleton
            isArray={false}
            width={mobile ? "100%" : "80%"}
            height={150}
          />
        </div>
      </Container>
    );
  };

  return (
    <>
      {isLoading ? (
        <ExtraSkeleton />
      ) : (
        <div
          className={`${cls.banner} ${
            podcast?.podcast ? "mb-[155px] minDesktop:mb-[120px]" : "mb-20"
          }`}
        >
          {minDesktop ? (
            <BannerMobile statistics={statistics} podcast={podcast?.podcast} />
          ) : (
            <BannerDesktop statistics={statistics} podcast={podcast?.podcast} />
          )}
        </div>
      )}
    </>
  );
}
