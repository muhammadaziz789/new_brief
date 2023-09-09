import useTranslation from "next-translate/useTranslation";
import { useMemo } from "react";

export default function OrderCreateTable({ orderData = {} }) {
  const { t } = useTranslation("common");

  const tableData = useMemo(() => {
    let data = [
      {
        title: t("product"),
        titleSecond: t("calculated"),
        class: "text-dark font-bold",
      },
      {
        title: orderData.seminar.title,
        titleSecond:
          orderData.seminar.price_formatted + " " + orderData?.currency,
        class: "text-blackLight text-sm",
      },
      {
        title: t("alll"),
        titleSecond:
          orderData.total_amount_formatted + " " + orderData?.currency,
        class: "text-dark font-bold",
      },
    ];
    if (orderData?.discount_amount) {
      data.splice(2, 0, {
        title: t("discount"),
        titleSecond:
          orderData?.discount_amount_formatted + " " + orderData?.currency,
      });
    }
    return data;
  }, [orderData, t]);

  return (
    <div className="border border-[#F2F4F8] rounded-[10px]">
      <ul>
        {tableData.map((item, ind) => (
          <li
            key={ind}
            className={`py-[9px] px-5 grid grid-cols-2 ${
              ind !== tableData.length - 1
                ? "border-b border-borderLighter"
                : ""
            }`}
          >
            <p className={item.class}>{item.title}</p>
            <p className={`${item.class} text-right mobile:text-left`}>
              {item.titleSecond}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
