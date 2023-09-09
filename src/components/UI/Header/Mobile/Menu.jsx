import { Collapse, MenuItem } from "@mui/material";
import { useMemo } from "react";
import Link from "next/link";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
export default function HeaderMobileMenu({
  isOpen,
  isMainPage = false,
  links = [],
  langs = [],
  lang = "uz",
}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const urls = useMemo(() => {
    let data = [...links];
    data.unshift({
      text: "main_page",
      link: "/",
      active: router.asPath === "/",
    });
    return data;
  }, [links, router]);

  return (
    <Collapse in={isOpen} timeout={600} unmountOnExit>
      <nav
        className={`border-y ${
          isMainPage ? "border-[#11111133]" : "border-borderDarker border-t-0"
        }`}
      >
        <div className="px-5 h-[100vh] flex flex-col">
          {urls?.map((link, ind) => (
            <Link key={ind} href={link.link}>
              <a
                className={`flex justify-between items-center font-[600] py-4 border-b w-full ml-0 ${
                  urls?.length - 1 === ind
                    ? "border-[#ffffff00]"
                    : `${
                        isMainPage
                          ? "border-[#11111133]"
                          : "border-borderDarker"
                      }`
                } ${
                  link.active
                    ? isMainPage
                      ? "text-ink"
                      : "text-yellowLight"
                    : "text-darkBase"
                }`}
              >
                {t(link.text)}
                <ArrowForwardIosRoundedIcon
                  style={{
                    fontSize: "16px",
                    color: link.active
                      ? isMainPage
                        ? "#5122D6"
                        : "#FFB800"
                      : "#181729",
                  }}
                />
              </a>
            </Link>
          ))}
          <div className="w-full mt-10 grid grid-cols-2 gap-2">
            {langs.map((item, ind) => (
              <Link key={item.value} href={router.asPath} locale={item.value}>
                <a
                  className={`border flex justify-center rounded-md ${
                    isMainPage ? "border-[#11111133]" : "border-borderDarker"
                  } ${langs.length - 1 === ind ? "" : ""}`}
                >
                  <MenuItem
                    className={`text-baseBlack ${
                      lang == item.value ? " font-[600]" : ""
                    }`}
                  >
                    {item.label}
                  </MenuItem>{" "}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </Collapse>
  );
}
