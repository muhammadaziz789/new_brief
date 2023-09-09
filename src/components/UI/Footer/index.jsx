import {
  TelegramIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  LocationIcon,
  MasterCardIcon,
  VizaIcon,
  UzdIcon,
  TiktokIcon,
  PaymeIcon,
  HumoIcon,
} from "components/svg";
import { YouTube } from "@mui/icons-material/";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import FooterDesktop from "./Desktop";
import FooterMobile from "./Mobile";
import { useIsMobile } from "hooks/useMobile";
import useTranslation from "next-translate/useTranslation";

export function Footer() {
  const { t } = useTranslation("common");
  const links = useSelector((state) => state.websiteRoutes.routes);
  const ipod = useIsMobile("ipod");
  const socialMedias = useMemo(() => {
    const res = [
      {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/abdukarimmirzayev2002",
      },
      {
        icon: <TelegramIcon />,
        link: "https://t.me/abdukarim_mirzayev_kanali",
      },
      {
        icon: <TwitterIcon />,
        link: "https://twitter.com/Abdukarim2002",
      },
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/abdukarimmirzayev/",
      },
      {
        icon: <YouTube style={{ fontSize: "30px" }} />,
        link: "https://youtube.com/@AbdukarimMirzayev2002",
      },
      {
        icon: <TiktokIcon />,
        link: "https://vm.tiktok.com/ZSHWFTNa/",
      },
    ];
    return res;
  }, []);

  const usefullLinks = useMemo(() => {
    const res = [
      {
        text: "abdukarimmirzayev.uz",
        link: "https://abdukarimmirzayev.uz/",
      },
      {
        text: "mohirdev.uz",
        link: "https://mohirdev.uz/",
      },
      {
        text: "mohirdev.uz",
        link: "https://mohirdev.uz/",
      },
      {
        text: "mohirdev.uz",
        link: "https://mohirdev.uz/",
      },
      {
        text: "mohirdev.uz",
        link: "https://mohirdev.uz/",
      },
    ];
    return res;
  }, []);

  const contactsList = useMemo(() => {
    const res = [
      {
        icon: <MailIcon />,
        text: "fikronlineuz@gmail.com",
        link: "mailto:fikronlineuz@gmail.com",
      },
      {
        icon: <PhoneIcon />,
        text: "+998 (90) 645-60-60",
        link: "tel:+998906456060",
      },
      {
        icon: <LocationIcon />,
        text: t("owner_address"),
        link: "https://www.apple.com/",
        target: "_blank",
      },
    ];
    return res;
  }, [t]);

  const paymentTypesList = useMemo(() => {
    const result = [
      {
        icon: <VizaIcon />,
      },
      {
        icon: <MasterCardIcon />,
      },
      {
        icon: <UzdIcon />,
      },
      {
        icon: <HumoIcon />,
      },
      {
        icon: <PaymeIcon fill="white" />,
      },
    ];
    return result;
  }, []);

  return (
    <>
      {ipod ? (
        <FooterMobile
          links={links}
          socialMedias={socialMedias}
          usefullLinks={usefullLinks}
          contactsList={contactsList}
          paymentTypesList={paymentTypesList}
        />
      ) : (
        <FooterDesktop
          links={links}
          socialMedias={socialMedias}
          usefullLinks={usefullLinks}
          contactsList={contactsList}
          paymentTypesList={paymentTypesList}
        />
      )}
    </>
  );
}
