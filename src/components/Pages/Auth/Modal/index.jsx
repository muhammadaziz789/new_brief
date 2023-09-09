import {
  setLoginData,
  setStep,
  setRegistrationModalOpen,
} from "store/registrationModal/registrationModal.slice";
import { useDispatch, useSelector } from "react-redux";
import AuthModalLogin from "./Login";
import AuthModalOtp from "./Otp";
import AuthModalSignUp from "./SignUp";
import AuthModalSignIn from "./SignIn";
import BuyModal from "./Buy";
import CSuccessModal from "components/UI/CSuccessModal";

export default function AuthModalRegistr() {
  const dispatch = useDispatch();
  const registrationModalOpen = useSelector(
    (state) => state.registrationModal.modalOpen
  );
  const step = useSelector((state) => state.registrationModal.step);

  function handleModalClose() {
    dispatch(setRegistrationModalOpen(null));
    dispatch(setStep("login"));
    dispatch(setLoginData({}));
  }

  switch (step) {
    case "login":
      return <AuthModalLogin handleModalClose={handleModalClose} />;
    case "otpcode":
      return <AuthModalOtp handleModalClose={handleModalClose} />;
    case "signup":
      return (
        <AuthModalSignUp
          handleModalClose={handleModalClose}
          registrationModalOpen={registrationModalOpen}
        />
      );
    case "signin":
      return (
        <AuthModalSignIn
          handleModalClose={handleModalClose}
          registrationModalOpen={registrationModalOpen}
        />
      );
    case "buy":
      return <BuyModal handleModalClose={handleModalClose} />;
    case "success":
      return <CSuccessModal handleModalClose={handleModalClose} />;
    default:
      return "login";
  }
}
