import * as yup from "yup";
export const SignupValidation = () => {
  return yup.object().shape({
    first_name: yup.string().required("reguired_filed"),
    last_name: yup.string().required("reguired_filed").min(1),
    // password: yup
    //   .string()
    //   .required("reguired_filed")
    //   .min(8, "password_musbe_at_least_8"),
    // password_confirmation: yup
    //   .string()
    //   .required("reguired_filed")
    //   .min(8, "password_musbe_at_least_8"),
  });
};
