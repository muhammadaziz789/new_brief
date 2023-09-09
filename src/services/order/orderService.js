import { request } from "../http-client";
import { useMutation } from "react-query";
import { async } from "@firebase/util";

const checkOrderFn = async (data) => await request.post("/orders/check", data);
const createOrderFn = async (data) =>
  await request.post("/orders/create", data);
const createPerformFn = async (data) =>
  await request.post("/orders/perform", data);
const checkCouponFn = async (data) =>
  await request.post(`orders/check-coupon`, data);
const orderSuccessFn = async (data) =>
  await request.post("/orders/success", data);
const orderCreateWithCouponFn = async (data) =>
  await request.post(`orders/create-with-coupon`, data);
const orderPerformWithCouponFn = async (data) =>
  await request.post("/orders/perform-with-coupon", data);
export const useOrder = ({
  checkOrderProps,
  createOrderProps,
  createPerformProps,
  checkCouponProps,
  orderSuccessProps,
  orderWithCouponProps,
  orderCreateWithCouponProps,
}) => {
  const checkOrder = useMutation(checkOrderFn, checkOrderProps);
  const createOrder = useMutation(createOrderFn, createOrderProps);
  const createPerform = useMutation(createPerformFn, createPerformProps);
  const checkCoupon = useMutation(checkCouponFn, checkCouponProps);
  const orderSuccess = useMutation(orderSuccessFn, orderSuccessProps);
  const orderWithCoupon = useMutation(
    orderPerformWithCouponFn,
    orderWithCouponProps
  );
  const orderCreateWithCoupon = useMutation(
    orderCreateWithCouponFn,
    orderCreateWithCouponProps
  );

  return {
    checkOrder,
    createOrder,
    createPerform,
    checkCoupon,
    orderSuccess,
    orderWithCoupon,
    orderCreateWithCoupon,
  };
};

const orderService = {
  checkOrder: (data) => request.post("/orders/check", data),
  createOrder: (data) => request.post("/orders", data),
  checkCoupon: (data) => request.post(`/orders/check-coupon`, data),
  getBoughtSeminars: (params) => request.get(`/orders`, { params }),
};

export default orderService;
