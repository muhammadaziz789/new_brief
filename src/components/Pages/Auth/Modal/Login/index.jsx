import CModal from "components/UI/CModal";
import { EastRounded } from "@mui/icons-material";
import GoogleButton from "components/UI/GoogleButton";
import useAuth from "services/auth";
import { useForm } from "react-hook-form";
import {
  setStep,
  setLoginData,
} from "store/registrationModal/registrationModal.slice";
import { useDispatch } from "react-redux";
import HFInputMask from "components/UI/FormElements/HFInputMask";
import { LoginValidation } from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import useTranslation from "next-translate/useTranslation";
import FacebookButton from "components/FacebookButton";

export default function AuthModalLogin({ handleModalClose = () => {} }) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const schema = LoginValidation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { signUpWithOtp } = useAuth({
    loginQueryProps: {
      onSuccess: (value) => {
        if (value?.message) {
          dispatch(setStep("otpcode"));
        }
        reset();
      },
    },
  });

  const onSubmit = (data) => {
    if (data?.phone?.length < 13) return;
    const phone = data?.phone?.substring(1).replace(/\s/g, "");
    dispatch(setLoginData({ username: phone }));
    signUpWithOtp.mutate({
      username: phone,
    });
  };

  const buttonStyles = {
    width: "58px",
    height: "48px",
    background: "#181729",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <CModal
      width="356px"
      headerTitle="registrationOrEnter"
      headerText="enterPhoneNumberOrGmail"
      footer={false}
      onClose={handleModalClose}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-between gap-[8px] mt-[18px]"
      >
        <HFInputMask
          name="phone"
          control={control}
          mask="+\9\9\8 99 999 99 99"
          required={true}
          errors={errors}
          maskchar={null}
          alwaysShowMask={false}
          placeholder={t("your_phone_number")}
          inputmode="numeric"
          classesInput="bg-graySecondry bg-opacity-[0.12]"
        />
        <button style={buttonStyles}>
          <EastRounded style={{ color: "#fff" }} />
        </button>
      </form>
      <p className="text-graySecondry text-center my-[10px]">{t("or")}</p>
      <GoogleButton />
      {/* <FacebookButton /> */}
    </CModal>
  );
}
