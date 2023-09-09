import { MenuItem } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { authorization } from "../../../config/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import useAuth from "services/auth";
import { useDispatch } from "react-redux";
import { authActions } from "store/auth/auth.slice";
import {
  setStep,
  setSuccessModalOpen,
} from "store/registrationModal/registrationModal.slice";

export default function GoogleButton({
  text = "continue_with_google",
  registrationModalOpen = "",
}) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const { loginInBySocialMedia } = useAuth({
    loginInBySocialMediaProps: {
      onSuccess: (value) => {
        handleSuccessActions(value);
      },
      onError: (error) => {},
    },
  });

  function handleSuccessActions(val) {
    if (val.token) {
      dispatch(authActions.loginSuccess({ token: val.token }));

      switch (registrationModalOpen) {
        case "buy":
          dispatch(setStep("buy"));
          break;
        default:
          dispatch(setStep("success"));
          dispatch(setSuccessModalOpen({ step: "login" }));
          break;
      }
    }
  }

  const handleSignInWithGoogle = () => {
    signInWithPopup(authorization, provider)
      .then((res) => {
        const first_name = res?.user?.displayName.split(" ")[0];
        const last_name = res?.user?.displayName.split(" ")[1];
        const result = {
          email: res?.user?.email,
          first_name,
          last_name,
          id: res?.user?.uid,
        };
        loginInBySocialMedia.mutate(result);
      })
      .catch((error) => console.log(error));
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#F3F6F8",
  };
  return (
    <MenuItem style={buttonStyle} onClick={() => handleSignInWithGoogle()}>
      <img src="/svg/google.svg" alt="" />
      <span className="text-blackDarker text-[14px] font-[600]">{t(text)}</span>
    </MenuItem>
  );
}
