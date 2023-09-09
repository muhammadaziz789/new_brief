import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setSuccessModalOpen } from "store/registrationModal/registrationModal.slice";
import { CheckCircleRounded } from "@mui/icons-material";

import CModal from "components/UI/CModal";
import useTranslation from "next-translate/useTranslation";
import CouponBought from "./Coupon/Bought";

import ModalCouponUI from "./Coupon";
export default function CSuccessModal({ handleModalClose = () => {} }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const dispatch = useDispatch();
  const successModalOpen = useSelector(
    (state) => state.registrationModal.successModalOpen
  );

  function closeSuccessModal() {
    handleModalClose();
    dispatch(setSuccessModalOpen({}));

    switch (successModalOpen.step) {
      case "logout":
        router.push("/");
        break;
      case "login":
        window.location.reload();
        break;
      case "coupon_bought":
        window.location.reload();
      default:
        break;
    }
  }

  const ExtraButton = () => (
    <button
      onClick={closeSuccessModal}
      type="submit"
      className="w-full h-[52px] normal-case text-white rounded-[10px] bg-baseBlack hover:bg-baseBlack"
    >
      <p className="font-[600]">{t("ok_understandable")}</p>
    </button>
  );

  const SuccessUI = () => {
    switch (successModalOpen.step) {
      case "logout":
        return (
          <div className="text-center">
            <CheckCircleRounded
              style={{ fontSize: "70px", color: "#22c55e" }}
            />
            <h1 className="text-2xl font-bold text-blackLight mt-3 mb-5">
              {t("you_logedout_from_profile")}
            </h1>
            <ExtraButton />
          </div>
        );
      case "login":
        return (
          <div className="mt-[136px] text-center">
            <CheckCircleRounded
              style={{ fontSize: "70px", color: "#22c55e" }}
            />
            <h1 className="text-2xl font-bold text-blackLight mt-3 mb-5">
              {t("congratulations_you_enter_your_account")}
            </h1>
            <ExtraButton />
          </div>
        );
      case "signup":
        return (
          <div className="mt-[136px] text-center">
            <CheckCircleRounded
              style={{ fontSize: "70px", color: "#22c55e" }}
            />
            <h1 className="text-2xl font-bold text-blackLight mt-3 pb-5">
              {t("congratulations_you_crated_account")}
            </h1>
            <ExtraButton />
          </div>
        );
      case "coupon":
        return (
          <ModalCouponUI
            data={successModalOpen?.data}
            closeSuccessModal={closeSuccessModal}
          />
        );
      case "coupon_bought":
        return (
          <>
            <CouponBought seminar={successModalOpen?.data} />
            <ExtraButton />
          </>
        );
      default:
        return (
          <div className="text-center">
            <CheckCircleRounded
              style={{ fontSize: "70px", color: "#22c55e" }}
            />
            <h1 className="text-2xl font-bold text-blackLight mt-3 pb-5">
              {t("congratulations_you_crated_account")}
            </h1>
            <ExtraButton />
          </div>
        );
    }
  };

  return (
    <CModal
      width="356px"
      header={false}
      footer={false}
      onClose={closeSuccessModal}
      handleClick={closeSuccessModal}
    >
      <div>
        <SuccessUI />
      </div>
    </CModal>
  );
}
