import { Container, MenuItem } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import LinkGenerator from "../../LinkGenerator";
import Image from "next/image";
import Button from "../../CButton";
import ContextMenu from "../../ContextMenu";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import classNames from "classnames";
import Headroom from "react-headroom";
import UserPfofileAvatarBtn from "components/Pages/Profile/AvatarBtn";

export default function HeaderDesktop({
  menu,
  token,
  langs,
  links,
  handleMenu,
  activeNav,
  handleModalRegistration = () => {},
}) {
  const router = useRouter();
  const { lang, t } = useTranslation("common");

  return (
    <Headroom pinStart={-100}>
      <header
        className={`border-b ${classNames(styles.header)} ${
          activeNav ? styles.activeHeader : ""
        } ${
          router.asPath === "/"
            ? "border-transparent"
            : "bg-white border-borderDarker"
        }`}
      >
        <Container>
          <div className={`${styles.box}`}>
            <div className={`${styles.left} gap-[33px]`}>
              <Link href="/">
                <a className={styles.logo}>
                  <Image
                    src="/svg/logoSite.svg"
                    alt="logo"
                    width="54"
                    height="54"
                  />
                </a>
              </Link>
              <nav className={styles.navigation}>
                <ul>
                  {links?.map((link) => (
                    <LinkGenerator
                      key={link.text}
                      link={link.link}
                      text={link.text}
                      icon={link.icon}
                      width={"24"}
                      height={"24"}
                      textClasses={`${
                        link.active ? "text-yellowLight" : ""
                      } ml-2`}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <div className={`${styles.right} gap-[33px]`}>
              <div
                className={`${styles.langs} ${
                  lang == "uz" ? "w-[120px]" : "w-[100px]"
                }`}
                onClick={() => handleMenu()}
              >
                {langs[lang === "uz" ? 0 : 1]?.label}
                <div className={styles.arrow}>
                  {menu ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                </div>
                <ContextMenu
                  visible={menu}
                  position={{ y: "40px", x: lang === "uz" ? "-10px" : "-20px" }}
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
              {token ? (
                <UserPfofileAvatarBtn link="/profile" />
              ) : (
                <div className={styles.registrBtn}>
                  <Button
                    text={t("entering")}
                    classes="hover:text-white"
                    customStyles={{ minWidth: "110px", height: "50px" }}
                    handleClick={() => handleModalRegistration()}
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>
    </Headroom>
  );
}
