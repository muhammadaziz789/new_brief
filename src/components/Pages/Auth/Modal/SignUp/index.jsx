import { useMemo, useState } from "react";
import { authActions } from "store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import useAuth from "services/auth";
import { setStep } from "store/registrationModal/registrationModal.slice";
import HFInput from "components/UI/FormElements/HFInput";
import CModal from "components/UI/CModal";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import useTranslation from "next-translate/useTranslation";
import { SignupValidation } from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function AuthModalSignUp({
  registrationModalOpen = "default",
  handleModalClose = () => {},
}) {
  const schema = SignupValidation();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const loginData = useSelector((state) => state.registrationModal.loginData);
  const { t } = useTranslation("common");
  const [visibilityList, setVisibilityList] = useState([
    "password",
    "password_confirmation",
  ]);
  const { signUp } = useAuth({
    signUpQueryProps: {
      onSuccess: (value) => {
        handleSuccessActions(value);
        reset();
      },
      onError: (error) => {
        // handleModalClose();
      },
    },
  });

  const onSubmit = (data) => {
    const param = {
      ...loginData,
      ...data,
    };
    signUp.mutate(param);
  };

  function handleSuccessActions(val) {
    if (val.token) {
      dispatch(authActions.loginSuccess({ token: val.token }));
      switch (registrationModalOpen) {
        case "buy":
          dispatch(setStep("buy"));
          break;
        default:
          // dispatch(setSuccessModalOpen({ step: "signup" }));
          dispatch(setStep("success"));
          break;
      }
    }
  }

  const inputList = useMemo(() => {
    const result = [
      {
        name: "first_name",
        label: "name",
        placeholder: "enter_field",
      },
      {
        name: "last_name",
        label: "surname",
        placeholder: "enter_field",
      },
      // {
      //   name: "password",
      //   label: "password",
      //   placeholder: "enter_field",
      //   visibility: true,
      // },
      // {
      //   name: "password_confirmation",
      //   label: "enter_password_again",
      //   placeholder: "enter_field",
      //   visibility: true,
      // },
    ];
    return result;
  }, []);

  function handlePassowrdVisibility(name) {
    if (visibilityList?.includes(name)) {
      setVisibilityList(visibilityList.filter((i) => i !== name));
    } else {
      setVisibilityList((prev) => [...prev, name]);
    }
  }

  return (
    <CModal
      width="420px"
      headerTitle="private_infos"
      footer={false}
      onClose={handleModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-[18px]">
        {inputList.map((item, ind) => (
          <div key={ind} className="relative">
            <HFInput
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              classes="mt-[16px]"
              register={register}
              {...register(item.name, {
                required: true,
              })}
              required={true}
              errors={errors}
              type={visibilityList?.includes(item.name) ? "password" : "text"}
            />
            {item?.visibility ? (
              <span
                className="absolute top-[40px] right-3 cursor-pointer"
                onClick={() => handlePassowrdVisibility(item.name)}
              >
                {visibilityList?.includes(item.name) ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
        <button
          type="submit"
          className="mt-[18px] w-full h-[52px] normal-case text-white rounded-[10px] bg-baseBlack hover:bg-baseBlack"
        >
          <p className="font-[600]">{t("continue")}</p>
        </button>
      </form>
    </CModal>
  );
}
