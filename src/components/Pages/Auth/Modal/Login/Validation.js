import * as yup from "yup";
export const LoginValidation = () => {
  return yup.object().shape({
    phone: yup
      .string()
      .matches(/^(\+998)\s(9[0-9])\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/, "enter_valid_phone_number")
      .required("enter_phone_number"),
    // email: yup.string().required("enter_email").email("enter_valid_email"),
  });
};