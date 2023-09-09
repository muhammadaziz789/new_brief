import { useState, useEffect, useCallback } from "react";
import HeaderDesktop from "./Desktop";
import { useDispatch, useSelector } from "react-redux";
import {
  setRoutes,
  setNoHeaderPages,
  setNoFooterPages,
} from "store/websiteRoutes/websiteRoutes.slice";
import { setRegistrationModalOpen } from "store/registrationModal/registrationModal.slice";
import { useIsMobile } from "hooks/useMobile";
import HeaderMobile from "./Mobile";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { websiteActions } from "store/website/websiteSlice";
export function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [activeNav, setActiveNav] = useState(false);
  const [menu, setMenu] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const links = useSelector((state) => state.websiteRoutes.routes);
  const minDesktop = useIsMobile("minDesktop");

  const langs = [
    {
      value: "uz",
      label: `O‘zbek tili`,
    },
    {
      value: "oz",
      label: "Крилл",
    },
  ];

  function handleMenu() {
    setMenu((prev) => !prev);
  }

  function handleModalRegistration() {
    dispatch(setRegistrationModalOpen("default"));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listenScrollEvent = () => {
        window.scrollY > 70 ? setActiveNav(true) : setActiveNav(false);
      };
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }
  }, []);

  const handleGetActiveLink = useCallback(
    (link) => {
      return router.pathname === link;
    },
    [router]
  );

  useEffect(() => {
    const routes = [
      {
        text: "live-seminars",
        icon: handleGetActiveLink("/live-seminars")
          ? "/svg/camera2.svg"
          : "/svg/camera.svg",
        link: "/live-seminars",
        active: handleGetActiveLink("/live-seminars"),
      },
      {
        text: "video-courses",
        icon: handleGetActiveLink("/video-courses")
          ? "/svg/play2.svg"
          : "/svg/play.svg",
        link: "/video-courses",
        active: handleGetActiveLink("/video-courses"),
      },
      {
        text: "about_us",
        icon: handleGetActiveLink("/about-us")
          ? "/svg/warning2.svg"
          : "/svg/warning.svg",
        link: "/about-us",
        active: handleGetActiveLink("/about-us"),
      },
      // {
      //   text: "new_media_academy",
      //   icon: handleGetActiveLink("/in-process")
      //     ? "/svg/new_media2.svg"
      //     : "/svg/new_media.svg",
      //   link: "/in-process",
      //   active: handleGetActiveLink("/in-process"),
      // },
      {
        text: "story-telling",
        icon: handleGetActiveLink("/in-process")
          ? "/svg/microphone2.svg"
          : "/svg/microphone.svg",
        link: "http://abdukarimmirzayev.com/",
        active: handleGetActiveLink("/in-process"),
      },
    ];
    dispatch(setRoutes(routes));
  }, [dispatch, handleGetActiveLink]);

  useEffect(() => {
    const header = ["/in-process"];
    const footer = ["/profile", "/in-process", "/orders/[status]"];
    dispatch(setNoHeaderPages(header));
    dispatch(setNoFooterPages(footer));
  }, [dispatch]);

  const routeChange = () => {
    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };
  router.events.on("routeChangeStart", () => {
    routeChange();
    dispatch(websiteActions.setMobileMenuOpen(false));
    NProgress.start();
  });
  router.events.on("routeChangeComplete", () => {
    routeChange();
    NProgress.done();
  });
  router.events.on("routeChangeError", () => NProgress.done());

  return (
    <div className="relative z-[99]">
      {minDesktop ? (
        <HeaderMobile
          menu={menu}
          langs={langs}
          links={links}
          handleMenu={handleMenu}
          activeNav={activeNav}
          handleModalRegistration={handleModalRegistration}
          token={token}
        />
      ) : (
        <HeaderDesktop
          menu={menu}
          langs={langs}
          links={links}
          handleMenu={handleMenu}
          activeNav={activeNav}
          handleModalRegistration={handleModalRegistration}
          token={token}
        />
      )}
    </div>
  );
}
