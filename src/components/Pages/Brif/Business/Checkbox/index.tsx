import { FC, useState } from "react";
import cls from "./style.module.scss";

interface Props {
  text?: string
}

const Checkbox: FC<Props> = ({ text }) => {
  const [active, setActive] = useState(false);
  
  return (
    <div
      className={`${cls.checkbox} ${active ? cls.active : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setActive((prev) => !prev);
      }}
    >
      <div className={cls.box}>
        <div className={cls.inner}>
          {active ? <img src="/svg/check-line.svg" alt="check" /> : ""}
        </div>
      </div>
      <p className={cls.text}>{text}</p>
    </div>
  );
};

export default Checkbox;
