import useAuth from "services/auth";
import { useForm } from "react-hook-form";
import {
  setStep,
  setLoginData,
} from "store/registrationModal/registrationModal.slice";
import { useDispatch, useSelector } from "react-redux";
import CModal from "components/UI/CModal";
import cls from "./style.module.scss";
import HFVerificationInput from "components/UI/FormElements/HFVerificationInput";
import { useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { authActions } from "store/auth/auth.slice";
import { setSuccessModalOpen } from "store/registrationModal/registrationModal.slice";
export default function AuthModalOtp({ handleModalClose = () => {} }) {
  const { t, lang } = useTranslation("common");
  const { control, handleSubmit, reset, watch } = useForm();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.registrationModal.loginData);
  const [error, setError] = useState(false);
  const { checkExist, signIn } = useAuth({
    checkQueryProps: {
      onSuccess: (value) => {
        handleOtpAction(value.exists);
      },
      onError: (error) => {
        setError(true);
      },
    },
    signInQueryProps: {
      onSuccess: (value) => {
        handleSuccessActions(value);
        reset();
      },
    },
  });

  function handleSuccessActions(val) {
    if (val.token) {
      dispatch(authActions.loginSuccess({ token: val.token }));
      dispatch(setStep("success"));
      dispatch(setSuccessModalOpen({ step: "login" }));
    }
  }

  const onSubmit = (data) => {
    const param = {
      ...loginData,
      ...data,
    };
    dispatch(setLoginData(param));
    checkExist.mutate(param);
  };
  const VerificationCode = watch("code");
  useEffect(() => {
    if (VerificationCode?.length === 4) {
      setTimeout(() => {
        onSubmit({ code: VerificationCode });
      }, 500);
    }
  }, [VerificationCode]);

  function handleOtpAction(exists) {
    if (exists) {
      signIn.mutate(loginData);
    } else {
      dispatch(setStep("signup"));
    }
  }

  const ExtraHeader = () => (
    <div className={cls.header}>
      <h2 className={cls.title}>{t("enter_code")}</h2>
      {lang === "uz" ? (
        <p className={cls.text}>
          4 xonalik son ushbu{" "}
          <span className={cls.number}>{loginData?.username}</span> raqamiga
          yuborildi
        </p>
      ) : (
        <p className={cls.text}>
          4 хоналик сон ушбу{" "}
          <span className={cls.number}>{loginData?.username}</span> рақамига
          юборилди
        </p>
      )}
    </div>
  );

  return (
    <CModal
      width="356px"
      extraHeader={<ExtraHeader />}
      footer={false}
      onClose={handleModalClose}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[18px] space-y-[30px]"
      >
        <HFVerificationInput
          control={control}
          name="code"
          error={error}
          inputMode="numeric"
          setError={setError}
        />
        <button
          type="submit"
          className="w-full h-[52px] normal-case text-white rounded-[10px] bg-baseBlack hover:bg-baseBlack"
        >
          <p className="font-[600]">{t("continue")}</p>
        </button>
      </form>
    </CModal>
  );
}
