import { useDispatch } from "react-redux";
import { logout } from "store/auth/auth.slice";
import { WarningRounded } from "@mui/icons-material";
import {
  setSuccessModalOpen,
  setLogoutModalOpen,
} from "store/registrationModal/registrationModal.slice";
import CModal from "components/UI/CModal";
import useTranslation from "next-translate/useTranslation";
export default function UserLogoutModal() {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");

  function handleLogout() {
    dispatch(logout());
    dispatch(
      setSuccessModalOpen({
        step: "logout",
        global: true,
      })
    );
    onClose();
  }

  function onClose() {
    dispatch(setLogoutModalOpen(false));
  }

  return (
    <CModal
      width="356px"
      header={false}
      footer={false}
      buttonText="ok_understandable"
      onClose={onClose}
      handleClick={handleLogout}
    >
      <div className="text-center">
        <WarningRounded style={{ fontSize: "70px", color: "#f0ad4e" }} />
        <h1 className="text-dark text-2xl font-bold mt-4">
          {t("logout_from_profile")}
        </h1>
        <p className="text-sm text-graySecondry w-3/4 mx-auto mt-3">
          {t("realy_want_to_logout")}?
        </p>
        <span className="flex gap-3 mt-10">
          <button
            onClick={handleLogout}
            className="w-full h-[48px] bg-dark hover:bg-dark normal-case rounded-[10px]"
          >
            <span className="text-white">{t("yes")}</span>
          </button>
          <button
            onClick={onClose}
            className="w-full h-[48px] bg-grayFourthLigher hover:bg-grayFourthLigher text-dark rounded-[10px] hover:text-dark normal-case"
          >
            <span>{t("no")}</span>
          </button>
        </span>
      </div>
    </CModal>
  );
}
