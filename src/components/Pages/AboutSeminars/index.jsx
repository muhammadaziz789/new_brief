import AboutSeminarsLeftSide from "./Left";
import AboutSeminarsRightSide from "./Right";
import { Container } from "@mui/material";
import seminarService from "services/seminars/seminarService";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import CSkeleton from "components/UI/CSkeleton";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";
import Comments from "./Left/Comments";
import { useState } from "react";
export default function AboutSeminarsWrapper() {
  const { lang } = useTranslation("common");
  const router = useRouter();
  const ipod = useIsMobile("ipod");
  const [comantable, setCamantable] = useState(false);
  const { data: seminar, isLoading } = useQuery(
    ["GET_SEMINAR", router.query.id, lang],
    () => {
      return seminarService.getSeminar(router.query.id);
    },
    {
      enabled: !!router.query.id,
    }
  );

  const ExtraSkeleton = () => {
    return (
      <div className="mt-[36px] pb-[77px] gap-[32px] flex flex-col ipod:flex-row">
        <CSkeleton width="100%" isArray={false} height={500} />
        <CSkeleton
          width={ipod ? "100%" : "570px"}
          isArray={false}
          height={400}
        />
      </div>
    );
  };

  return (
    <Container>
      {isLoading ? (
        <ExtraSkeleton />
      ) : (
        <div className="pt-[50px] pb-[77px] gap-[32px] flex flex-col ipod:flex-row">
          <span className="w-full">
            <AboutSeminarsLeftSide
              seminar={seminar?.seminar}
              comantable={comantable}
              setCamantable={setCamantable}
            />
          </span>
          <span className="ipod:w-[570px] relative">
            <AboutSeminarsRightSide seminar={seminar?.seminar} />
          </span>
          {ipod && seminar?.seminar?.is_purchased && (
            <Comments
              seminar={seminar?.seminar}
              setCamantable={setCamantable}
            />
          )}
        </div>
      )}
    </Container>
  );
}
