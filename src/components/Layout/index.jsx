import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { websiteActions } from "store/website/websiteSlice";
import useTranslation from "next-translate/useTranslation";

export default function Layout({ children }) {
  const { lang } = useTranslation("common");
  const dispatch = useDispatch();
  const skeleton = useSelector((state) => state.website.skeleton);
  const skeletonTime = useSelector((state) => state.website.skeletonTime);
  useEffect(() => {
    setTimeout(() => {
      dispatch(websiteActions.setSkeletonActive(false));
    }, skeletonTime);
  }, [dispatch, skeletonTime]);

  useEffect(() => {
    if (lang) dispatch(websiteActions.setWebsiteLang(lang));
  }, [lang, dispatch]);

  return <>{children}</>;
}
