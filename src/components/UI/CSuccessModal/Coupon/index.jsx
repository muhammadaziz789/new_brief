import { DollerRoundedIcon } from "components/svg";
import DiscountIcon from "@mui/icons-material/Discount";
import cls from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useDispatch, useSelector } from "react-redux";
import { useOrder } from "services/order/orderService";
import { useRouter } from "next/router";
import { setSuccessModalOpen } from "store/registrationModal/registrationModal.slice";
export default function ModalCouponUI() {
  const { t, lang } = useTranslation("common");
  const coupon = useSelector((state) => state.order.couponData);
  const dispatch = useDispatch();

  const { orderWithCoupon, orderCreateWithCoupon } = useOrder({
    orderCreateWithCouponProps: {
      onSuccess: (res) => {
        if (!res?.order_id) return;
        orderWithCoupon.mutate({ order_id: res.order_id });
      },
    },
    orderWithCouponProps: {
      onSuccess: (res) => {
        if (!res.seminar) return;
        handleBoughtActions();
      },
    },
  });

  const handleBoughtActions = () => {
    dispatch(
      setSuccessModalOpen({
        step: "coupon_bought",
        global: true,
      })
    );
  };

  function handleOrderActions() {
    handleBoughtActions();
    const data = {
      seminar_id: coupon.seminar.id,
      coupon_code: coupon.text,
    };
    orderCreateWithCoupon.mutate(data);
  }

  return (
    <div className={cls.coupon}>
      <h1 className={cls.title}>{coupon?.seminar?.title}</h1>
      <div className={cls.item}>
        <p className={cls.text}>
          <DollerRoundedIcon />
          {t("cost")}
        </p>
        <span className={cls.price}>{coupon?.seminar?.price} UZS</span>
      </div>
      <div className={cls.item}>
        <p className={cls.text}>
          <DiscountIcon style={{ color: "#5122D6" }} />
          {t("discount")}
        </p>
        <span className={cls.price}>
          {coupon?.discount_amount_formatted}{" "}
          {coupon?.type === "amount" ? "UZS" : "%"}
        </span>
      </div>
      <div className={cls.item}>
        <p className={cls.text}>{t("alll")}</p>
        <span className={cls.price}>{coupon?.total_amount_formatted} UZS</span>
      </div>
      <button
        onClick={() => handleOrderActions()}
        type="button"
        className="w-full h-[52px] normal-case text-white rounded-[10px] bg-baseBlack hover:bg-baseBlack mt-5"
      >
        <p className="font-[600]">{t("buy_with_coupon")}</p>
      </button>
    </div>
  );
}
