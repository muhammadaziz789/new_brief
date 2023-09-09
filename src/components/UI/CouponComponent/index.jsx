import useDebounce from "hooks/useDebounce";
import CInputGenerator from "../CInputGenerator";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useState } from "react";
import { useOrder } from "services/order/orderService";
import { useDispatch, useSelector } from "react-redux";
import { setSuccessModalOpen } from "store/registrationModal/registrationModal.slice";
import { orderActions } from "store/order/order.slice";
import { CouponIcon } from "components/svg";
import { setRegistrationModalOpen } from "store/registrationModal/registrationModal.slice";

export default function CouponComponent({
  name = "coupon",
  seminar = {},
  errors = {},
  setErrors = () => {},
  orderPage = false,
  setValue = () => {},
  setLoading = () => {},
}) {
  const { t } = useTranslation("common");
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState({});
  const couponData = useSelector((state) => state.order.couponData);
  const user = useSelector((state) => state.auth.user);

  const { checkCoupon } = useOrder({
    checkCouponProps: {
      onSuccess: (res) => {
        if (res?.coupon?.exists) {
          setCoupon({ ...coupon, ...res?.coupon });
          setErrors({});
          dispatch(
            setSuccessModalOpen({
              step: "coupon",
              global: true,
            })
          );
          dispatch(
            orderActions.setCouponData({
              ...coupon,
              ...res?.coupon,
              seminar: seminar,
            })
          );
          setLoading(false);
        } else setErrors({ [name]: { message: `there_is_not_this_coupon` } });
      },
    },
  });

  const handleCooupon = useDebounce((evt) => {
    if (!evt) {
      setErrors({});
      return;
    }
    if (evt?.length === 15) {
      if (user) {
        setCoupon({ text: evt });
        checkCoupon.mutate({ code: evt, seminar_id: seminar?.id });
      } else {
        dispatch(setRegistrationModalOpen("default"));
      }
    } else {
      setErrors({ [name]: { message: "enter_length_of_word" } });
    }
  }, 700);

  useEffect(() => {
    if (couponData?.text) setValue(name, couponData?.text);
  }, [couponData]);

  function handleChange (e) {
    if (e) {
      setLoading(true)
    } else setLoading(false)
    handleCooupon(e)
  }

  return (
    <>
      {orderPage ? (
        <CInputGenerator
          classes="rounded-[10px] bg-grayThird"
          classesInput="px-3"
          placeholder="have_coupon"
          label="coupon"
          icon={<CouponIcon />}
          setValue={setValue}
          name={name}
          onChange={handleChange}
          errors={errors}
          debounceTime={0}
          defaultValue={couponData?.text}
        />
      ) : (
        <CInputGenerator
          placeholder={t("do_you_have_promocode")}
          classes="border border-borderDarker rounded-[10px] bg-(#F2F2F4) px-[0px]"
          classesInput="px-[0px] text-base"
          onChange={handleChange}
          name={name}
          errors={errors}
          debounceTime={0}
          defaultValue={couponData?.text}
        />
      )}
    </>
  );
}
