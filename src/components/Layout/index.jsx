import { Footer } from "components/UI/Footer";
import { Header } from "components/UI/Header";
import { useRouter } from "next/router";
import AuthModalRegistr from "components/Pages/Auth/Modal";
import UserLogoutModal from "components/Pages/Auth/LogoutModal";
import { useSelector, useDispatch } from "react-redux";
import CSuccessModal from "components/UI/CSuccessModal";
import CSkeleton from "components/UI/CSkeleton";
import { useEffect } from "react";
import { websiteActions } from "store/website/websiteSlice";
import YoutubeVidoeModal from "components/UI/YoutubeVidoeModal";
import CAlert from "components/UI/CAlert";
import useTranslation from "next-translate/useTranslation";

export default function Layout({ children }) {
  const router = useRouter();
  const { lang } = useTranslation("common");
  const dispatch = useDispatch();
  const noHeaderPages = useSelector(
    (state) => state.websiteRoutes.noHeaderPages
  );
  const noFooterPages = useSelector(
    (state) => state.websiteRoutes.noFooterPages
  );
  const registrationModalOpen = useSelector(
    (state) => state.registrationModal.modalOpen
  );
  const logoutModalOpen = useSelector(
    (state) => state.registrationModal.logoutModalOpen
  );
  const successModalOpen = useSelector(
    (state) => state.registrationModal.successModalOpen
  );
  const skeleton = useSelector((state) => state.website.skeleton);
  const skeletonTime = useSelector((state) => state.website.skeletonTime);
  const youtubeVideoModalOpen = useSelector(
    (state) => state.website.youtubeVideoModalOpen
  );
  const alertData = useSelector((state) => state.website.alert);

  useEffect(() => {
    setTimeout(() => {
      dispatch(websiteActions.setSkeletonActive(false));
    }, skeletonTime);
  }, [dispatch, skeletonTime]);

  useEffect(() => {
    if (lang) dispatch(websiteActions.setWebsiteLang(lang));
  }, [lang, dispatch]);

  return (
    <>
      {skeleton ? (
        <CSkeleton isArray={false} classes="w-full z-[98]" height={900} />
      ) : (
        <>
          {!noHeaderPages?.includes(router.pathname) ? <Header /> : ""}
          {children}
          {!noFooterPages.includes(router.pathname) ? <Footer /> : ""}

          {registrationModalOpen ? <AuthModalRegistr /> : ""}
          {logoutModalOpen ? <UserLogoutModal /> : ""}
          {successModalOpen?.global ? <CSuccessModal /> : ""}
          {youtubeVideoModalOpen?.open ? <YoutubeVidoeModal /> : ""}
          {alertData?.title && <CAlert data={alertData} />}
        </>
      )}
    </>
  );
}
