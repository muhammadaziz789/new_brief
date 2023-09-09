import cls from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@mui/material";
import LinkGenerator from "../../LinkGenerator";
import CLinkGenerator from "components/UI/CLinkgenerator";
import useTranslation from "next-translate/useTranslation";
export default function FooterMobile({
  socialMedias,
  links,
  contactsList = [],
  paymentTypesList = [],
}) {
  const { t } = useTranslation("common");
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={`divide-y divide-[#ffffff11] pt-[70px] ${cls.top}`}>
          <span
            className={`footerGridCols gap-[50px] mobile:gap-[70px] ${cls.wrapper}`}
          >
            <div className={`${cls.about}`}>
              <div className="w-full flex items-start h-[80px]">
                <div className="w-full flex items-center justify-center small:justify-start gap-3">
                  <Link href="/">
                    <a className={cls.logo}>
                      <Image
                        src="/svg/logoSite.svg"
                        alt="logo"
                        width="50"
                        height="50"
                      />
                    </a>
                  </Link>
                  <p className={cls.name}>{t("owner_name")}</p>
                </div>
              </div>
              <LinkGenerator
                text={"about_us"}
                link={"/about-us"}
                textClasses={"text-white text-sm font-medium mx-auto"}
              />
            </div>
            <div className={`${cls.menu}`}>
              <h2 className={`${cls.gridTitle} h-[50px] mobile:h-[80px]`}>
                {t("menus")}
              </h2>
              <div className="flex flex-col gap-[24px] items-center small:items-start">
                {links?.map((item, ind) => (
                  <LinkGenerator
                    key={ind}
                    text={item.text}
                    link={item.link}
                    textClasses={"text-white text-sm font-medium ml-0"}
                  />
                ))}
              </div>
            </div>
            {/* <div className={`${cls.usefullLinks}`}>
              <h2 className={`${cls.gridTitle} h-[50px] mobile:h-[80px]`}>
                {t("usefull_links")}
              </h2>
              <div className="flex flex-col gap-[24px] items-center small:items-start">
                {usefullLinks?.map((item, ind) => (
                  <CLinkGenerator
                    key={ind}
                    text={item.text}
                    textClasses={"text-white text-sm font-medium"}
                  />
                ))}
              </div>
            </div> */}
            <div className={`${cls.contact}`}>
              <h2 className={`${cls.gridTitle} h-[50px] mobile:h-[80px]`}>
                {t("connection")}
              </h2>
              <div className="flex flex-col gap-[24px] items-center small:items-start">
                {contactsList?.map((item, ind) => (
                  <div
                    key={ind}
                    className="flex w-full flex-col small:flex-row items-center small:items-start"
                  >
                    <div className="w-[40px] mb-2 small:mb-0">{item.icon}</div>
                    <a
                      href={item.link}
                      target={item?.target || "_self"}
                      rel="noreferrer"
                      className="ipod:w-[75%] text-sm font-medium leading-[17px] text-center small:text-left"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
              <div>
                <p className={cls.socialText}>Ijtimoiy tarmoqlarda kuzating:</p>
                <div className={`gap-[20px] ${cls.socialMedias}`}>
                  {socialMedias?.map((item, ind) => (
                    <CLinkGenerator key={ind} link={item.link}>
                      <div className="hover:scale-110">{item?.icon}</div>
                    </CLinkGenerator>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${cls.payment}`}>
              <h2 className={`${cls.gridTitle} h-[50px]`}>{t("payment")}</h2>
              <div className="flex flex-col gap-[24px] items-center small:items-start">
                <LinkGenerator
                  link="/offer"
                  text={"offerta"}
                  textClasses={
                    "text-white text-sm font-medium hover:text-[#FFB800] ml-0"
                  }
                />
              </div>
            </div>
          </span>
          <div className={`mt-10 pt-5 pb-7 ${cls.bottom}`}>
            <span>© {t("preserved_rights")}</span>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              {paymentTypesList.map((item, ind) => (
                <div key={ind}>{item.icon}</div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
