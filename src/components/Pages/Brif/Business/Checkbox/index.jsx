import { useState } from "react";
import cls from "./style.module.scss";
import { useEffect } from "react";

const Checkbox = ({ text, initName, name, handleValues }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    handleValues(initName, name, handleValues);
  }, [active]);

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
