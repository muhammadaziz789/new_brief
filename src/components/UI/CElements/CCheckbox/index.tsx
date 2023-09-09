import { FC } from "react";
import cls from "./style.module.scss";

interface Props {
  element: {
    text?: string;
    active?: boolean;
  };
  handleCheck: Function;
}

const CCheckbox: FC<Props> = ({ element, handleCheck }) => {
  return (
    <div
      className={`${cls.checkbox} ${element.active ? cls.active : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        handleCheck(element);
      }}
    >
      <div className={cls.box}>
        <div className={cls.inner}>
          {element.active ? (
            <img src="/svg/check-line.svg" alt="check" />
          ) : (
            ""
          )}
        </div>
      </div>
      <p className={cls.text}>{element.text}</p>
    </div>
  );
};

export default CCheckbox;
