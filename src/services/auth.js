import { useMutation, useQuery } from "react-query";
import { request } from "./http-client";

const SendOtpFn = async (data) => await request.post("/otp/send-code", data);
const CheckExistFn = async (data) => await request.post("/auth/exists", data);
const SignUpFn = async (data) => await request.post("/auth/signup", data);
const SignInFn = async (data) => await request.post("/auth/login", data);
const LoginInBySocialMediaFn = async (data) =>
  await request.post("/social-login/google", data);
const UploadUserImageFn = async (data) =>
  await request.post("/profile/upload", data);
const GetUserFn = async () => await request.get("/auth/me");

const useAuth = ({
  loginQueryProps,
  checkQueryProps,
  signUpQueryProps,
  signInQueryProps,
  loginInBySocialMediaProps,
  userImageQueryProps,
  userId,
}) => {
  const signUpWithOtp = useMutation(SendOtpFn, loginQueryProps);
  const checkExist = useMutation(CheckExistFn, checkQueryProps);
  const signUp = useMutation(SignUpFn, signUpQueryProps);
  const signIn = useMutation(SignInFn, signInQueryProps);
  const loginInBySocialMedia = useMutation(
    LoginInBySocialMediaFn,
    loginInBySocialMediaProps
  );
  const UploadUserImage = useMutation(UploadUserImageFn, userImageQueryProps);
  const getUser = useQuery(["GET_USER"], () => GetUserFn(), {
    enabled: !!userId,
  });
  return {
    signUpWithOtp,
    checkExist,
    signUp,
    signIn,
    loginInBySocialMedia,
    UploadUserImage,
    getUser,
  };
};

export default useAuth;
