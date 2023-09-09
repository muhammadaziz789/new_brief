import Alert from "@mui/material/Alert";
import useCountDown from "hooks/useCoundDown";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { websiteActions } from "store/website/websiteSlice";

export default function CAlert({ data = {} }) {
  const { t } = useTranslation(data?.translation || "common");
  const dispatch = useDispatch();
  const timeClose = useCountDown("secunds", data?.timer || 8);

  const handleAlertActions = () => {
    dispatch(websiteActions.setAlertData({}));
  };

  useEffect(() => {
    if (timeClose < 1) {
      handleAlertActions();
    }
  }, [timeClose]);

  return (
    <div className="fixed top-0 w-full z-[9999]" id="calert">
      <Alert
        severity={data?.type || "success"}
        onClose={() => handleAlertActions()}
      >
        {t(data?.title)}
      </Alert>
    </div>
  );
}
