import CModal from "components/UI/CModal";
import useAuth from "services/auth";
import { authActions } from "store/auth/auth.slice";
import { useForm } from "react-hook-form";
import {
  setStep,
  setSuccessModalOpen,
} from "store/registrationModal/registrationModal.slice";
import { useDispatch, useSelector } from "react-redux";
import HFInput from "components/UI/FormElements/HFInput";
import { useEffect, useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import useTranslation from "next-translate/useTranslation";
export default function AuthModalSignIn({
  registrationModalOpen,
  handleModalClose = () => {},
}) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState(true);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const loginData = useSelector((state) => state.registrationModal.loginData);
  const [error, setError] = useState(false);
  const { t } = useTranslation("common");
  const watchedValuePassword = watch("password");
  const { signIn } = useAuth({
    signInQueryProps: {
      onSuccess: (value) => {
        handleSuccessActions(value);
        reset();
      },
      onError: (error) => {
        if (error.message) {
          let data = {};
          data["password"] = { message: "enter_login_password" };
          setError(data);
        }
      },
    },
  });

  const onSubmit = (data) => {
    const param = {
      ...loginData,
      ...data,
    };
    signIn.mutate(param);
  };

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

  useEffect(() => {
    if (watchedValuePassword) setError({});
  }, [watchedValuePassword]);

  return (
    <CModal
      width="356px"
      headerTitle="enter_login_password"
      footer={false}
      onClose={handleModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[18px] space-y-5">
        <div className="relative">
          <HFInput
            name={"password"}
            label={"password"}
            placeholder={"enter_field"}
            classes="mt-[16px]"
            classesInput="pr-12"
            register={register}
            {...register("password", {
              required: true,
            })}
            errors={error}
            type={password ? "password" : "text"}
          />
          <span
            className="absolute top-[40px] right-3 cursor-pointer"
            onClick={() => setPassword((prev) => !prev)}
          >
            {password ? <VisibilityOff /> : <Visibility />}
          </span>
        </div>
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
