import Headroom from "react-headroom";
import { Container, MenuItem, Button } from "@mui/material";
import cls from "./style.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import ContextMenu from "components/UI/ContextMenu";
import useTranslation from "next-translate/useTranslation";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  HorizontalRuleRounded,
} from "@mui/icons-material";
import HeaderMobileMenu from "./Menu";
import UserPfofileAvatarBtn from "components/Pages/Profile/AvatarBtn";
import { useIsMobile } from "hooks/useMobile";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { websiteActions } from "store/website/websiteSlice";
export default function HeaderMobile({
  menu,
  token,
  langs,
  links,
  activeNav,
  handleMenu = () => {},
  handleModalRegistration = () => {},
}) {
  const router = useRouter();
  const { lang, t } = useTranslation("common");
  const dispatch = useDispatch();
  const mobileMenuOpen = useSelector((state) => state.website.mobileMenuOpen);
  const small = useIsMobile("small");
  const isMainPage = useMemo(() => {
    return router.asPath === "/";
  }, [router]);

  function handleMenuOpen() {
    dispatch(websiteActions.setMobileMenuOpen(!mobileMenuOpen));
  }

  return (
    <Headroom>
      <header
        className={`border-b ${classNames(cls.header)} ${
          activeNav ? cls.activeHeader : ""
        } ${
          isMainPage ? "border-transparent" : "bg-white border-borderDarker"
        }`}
      >
        <Container>
          <div className={cls.box}>
            <div className={cls.left}>
              <div
                className={`${cls.wrapper} ${mobileMenuOpen ? cls.active : ""}`}
                onClick={() => handleMenuOpen()}
              >
                <HorizontalRuleRounded className={cls.arrow1} />
                <HorizontalRuleRounded className={cls.arrow2} />
              </div>
            </div>

            <div className={cls.center}>
              <Link href="/">
                <a className={cls.logo}>
                  <Image
                    src="/svg/logoSite.svg"
                    alt="logo"
                    width="30"
                    height="30"
                  />
                </a>
              </Link>
            </div>
            <div className={cls.right}>
              {!small && (
                <div className={cls.langs} onClick={() => handleMenu()}>
                  {langs[lang === "uz" ? 0 : 1]?.label}
                  <div className={cls.arrow}>
                    {menu ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                  </div>
                  <ContextMenu
                    visible={menu}
                    position={{
                      y: "40px",
                      x: lang === "uz" ? "-10px" : "-30px",
                    }}
                    closeContextMenu={(e) => {
                      e.preventDefault();
                      handleMenu();
                    }}
                    classes={"w-[120px] bg-white shadow overflow-hidden"}
                  >
                    {langs.map((item) => (
                      <Link
                        key={item.value}
                        href={router.asPath}
                        locale={item.value}
                        onClick={() => handleMenu()}
                      >
                        <a>
                          <MenuItem className="text-baseBlack">
                            {item.label}
                          </MenuItem>{" "}
                        </a>
                      </Link>
                    ))}
                  </ContextMenu>
                </div>
              )}

              {token ? (
                <UserPfofileAvatarBtn link="/profile" />
              ) : (
                <div className={cls.registrBtn}>
                  <Button onClick={() => handleModalRegistration()}>
                    {t("entering")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
        <div
          className={`${cls.menu} ${isMainPage && !activeNav ? cls.main : ""}`}
        >
          <HeaderMobileMenu
            isOpen={mobileMenuOpen}
            links={links}
            isMainPage={isMainPage}
            langs={langs}
            lang={lang}
          />
        </div>
      </header>
    </Headroom>
  );
}
