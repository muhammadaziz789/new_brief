import { MenuItem } from "@mui/material";
import { authorization } from "config/firebase";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import useTranslation from "next-translate/useTranslation";
import useAuth from "services/auth";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useDispatch } from "react-redux";
import {
  setStep,
  setSuccessModalOpen,
} from "store/registrationModal/registrationModal.slice";
import { websiteActions } from "store/website/websiteSlice";

export default function FacebookButton({
  text = "continue_with_facebook",
  registrationModalOpen = "",
}) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const provider = new FacebookAuthProvider();

  const { loginInBySocialMedia } = useAuth({
    loginInBySocialMediaProps: {
      onSuccess: (value) => {
        handleSuccessActions(value);
      },
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

  const handleSignInWithFacebook = () => {
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
      .catch((error) => {
        if (
          error?.message ===
          "Firebase: Error (auth/account-exists-with-different-credential)."
        ) {
          dispatch(
            websiteActions.setAlertData({
              title:
                "Bu email dan google orqali kirilgan, ilitmos google bilan davom ettiring!",
              translation: "profile",
              type: "error",
            })
          );
        }
      });
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: "#F3F6F8",
    marginTop: "12px",
  };
  return (
    <MenuItem style={buttonStyle} onClick={() => handleSignInWithFacebook()}>
      <FacebookRoundedIcon style={{ color: "#2266EB" }} />
      <span className="text-blackDarker text-[14px] font-[600]">{t(text)}</span>
    </MenuItem>
  );
}
