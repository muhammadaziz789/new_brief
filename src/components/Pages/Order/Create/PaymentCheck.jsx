import { PaymeIcon, PayboxIcon } from "components/svg";
import { useEffect, useMemo, useState } from "react";

export default function OrderCreatePaymentCheck({
  name = "",
  setValue = () => {},
}) {
  const [active, setActive] = useState("payme");
  const list = useMemo(() => {
    const data = [
      {
        icon: <PaymeIcon />,
        type: "payme",
      },
      {
        icon: <PayboxIcon />,
        type: "freedompay",
      },
    ];
    return data;
  }, []);

  function handleCheckbox(type) {
    setActive(type);
  }

  useEffect(() => {
    setValue(name, active);
  }, [name, active]);

  return (
    <div className="flex gap-4">
      {list.map((item) => (
        <div
          key={item.type}
          onClick={(e) => {
            e.preventDefault();
            handleCheckbox(item.type);
          }}
          className="cursor-pointer inline-flex items-center rounded-[10px] border border-borderLighter h-[48px] px-5"
        >
          <span
            className={`mr-[10px] w-5 h-5 rounded-full flex items-center justify-center ${
              active == item.type ? "bg-ink" : "bg-grayFifthDarker"
            }`}
          >
            <span className="w-1/2 h-1/2 bg-white rounded-full"></span>
          </span>
          {item.icon}
        </div>
      ))}
    </div>
  );
}
