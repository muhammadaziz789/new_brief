import { CCard } from "components/UI/CCards/CCard";
import CDivider from "components/UI/CDivider";
import { useForm } from "react-hook-form";
import OrderCreateTable from "./Table";
import { useEffect, useMemo, useState } from "react";
import OrderCreatePaymentCheck from "./PaymentCheck";
import OrderCreateAcceptCheck from "./AcceptCheck";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import OrderCreateInputs from "./Inputs";
import CSkeleton from "components/UI/CSkeleton";
import { useOrder } from "services/order/orderService";
import CouponComponent from "components/UI/CouponComponent";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "store/order/order.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CLoadingBtn from "components/UI/CLoadingBtn";
import { setRegistrationModalOpen } from "store/registrationModal/registrationModal.slice";

export default function OrderCreate() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const couponData = useSelector((state) => state.order.couponData);
  const orderStateData = useSelector((state) => state.order.orderData);
  const [orderData, setOrderData] = useState({});
  const [isAgreeError, setisAgreeError] = useState(false);
  const [errorsCoupon, setErrorsCoupon] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [loadingWrapper, setLoadingWrapper] = useState(true);

  const schema = useMemo(() => {
    let obj = {
      first_name: yup.string().required("reguired_filed"),
      last_name: yup.string().required("reguired_filed").min(1),
    };
    if (orderData?.user?.registered_type === "email") {
      obj.email = yup
        .string()
        .required("enter_email")
        .email("enter_valid_email");
    }
    // else {
    // obj.phone = yup
    //   .string()
    //   .matches(
    //     /^(\+998)\s(9[0-9])\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/,
    //     "enter_valid_phone_number"
    //   )
    //   .required("enter_phone_number");
    // }

    return yup.object().shape({ ...obj });
  }, [orderData]);

  const SeminarId = useMemo(() => {
    return router?.query?.id;
  }, [router]);

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { checkOrder, createPerform, createOrder } = useOrder({
    checkOrderProps: {
      onSuccess: (res) => {
        setOrderData(res);
      },
    },
    createOrderProps: {
      onSuccess: (res) => {
        if (res?.order_id) {
          createPerform.mutate({ order_id: res?.order_id });
        }
      },
    },
    createPerformProps: {
      onSuccess: (res) => {
        setLoading(false);
        handleAfterMethods();
        if (res?.redirect_url) {
          window.location.href = res.redirect_url;
        }
      },
    },
  });

  const onSubmit = (data) => {
    if (!data?.is_agreed) {
      setisAgreeError(true);
      return;
    }
    setLoading(true);

    let resultPhone = orderData?.user?.phone
      ? orderData.user.phone
      : data?.phone ?? "";

    if (resultPhone.includes("+")) resultPhone = resultPhone.substring(1);
    data.phone = resultPhone?.replace(/\s+/g, "");

    data.seminar_id = parseFloat(SeminarId);
    data.is_coupon = data?.coupon_code ? true : false;
    createOrder.mutate(data);
  };

  function handleAfterMethods() {
    setTimeout(() => {
      handleCouponRemoveFn();
      handleSetOrderData("remove");
      // router.push(`/about-seminars/${router?.query?.slug}`);
    }, 2000);
  }

  function handleCouponRemoveFn() {
    dispatch(orderActions.setCouponData({}));
  }

  function handleSetOrderData(status) {
    if (status === "remove") {
      dispatch(orderActions.setOrderData({}));
    } else {
      dispatch(orderActions.setOrderData(getValues()));
    }
  }

  function handleSetDefaultValues() {
    if (!orderStateData?.first_name) return;

    for (let el in orderStateData) {
      setValue(el, orderStateData[el]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingWrapper(false);
    }, 2000);
    if (!user?.id) {
      setLoadingWrapper(false);
      dispatch(setRegistrationModalOpen("default"));
      return;
    }
    if (SeminarId) {
      const params = {
        seminar_id: SeminarId,
        is_coupon: couponData?.discount ? true : false,
        coupon_code: couponData?.text ? couponData.text : "",
      };
      checkOrder.mutate(params);
    }
  }, [SeminarId, couponData]);

  useEffect(() => {
    handleSetDefaultValues();
  }, []);

  const ExtraSkeleton = () => <CSkeleton isArray={false} height={700} />;
  return (
    <CCard classes="border-none mb-10 p-[10px] bg-[#f9faff] mobile:p-5">
      <h2 className="text-dark font-bold">{t("officialization_order")}</h2>
      <CDivider color="#F2F4F8" />
      {orderData?.user ? (
        <div>
          <CouponComponent
            seminar={orderData?.seminar}
            name="coupon_code"
            orderPage={true}
            setValue={setValue}
            errors={errorsCoupon}
            setErrors={setErrorsCoupon}
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <OrderCreateInputs
              errors={errors}
              register={register}
              control={control}
              orderData={orderData}
              setValue={setValue}
            />
            <h3 className="text-dark font-bold mt-5 mb-3">{t("your_order")}</h3>
            <OrderCreateTable orderData={orderData} />
            <h3 className="text-dark font-bold mt-5 mb-3">
              {t("payment_type")}
            </h3>
            <OrderCreatePaymentCheck setValue={setValue} name="provider_name" />
            <CDivider color="#F2F4F8" />
            <p className="text-dark text-sm font-medium">
              {t("your_private_info_used_for")}
            </p>
            <OrderCreateAcceptCheck
              setValue={setValue}
              name="is_agreed"
              setisAgreeError={setisAgreeError}
              isAgreeError={isAgreeError}
              handleClick={handleSetOrderData}
              orderStateData={orderStateData}
            />
            <CLoadingBtn text="buying" loading={loading} type="submit" />
          </form>
        </div>
      ) : (
        ""
      )}
      {loadingWrapper && <ExtraSkeleton />}
      {!loadingWrapper && !orderData?.user && (
        <div className="w-full py-20 flex justify-center">
          <img
            width={150}
            height="auto"
            src="/images/no-data.png"
            alt={t("data_not_available")}
          />
        </div>
      )}
    </CCard>
  );
}
