import { FC, useState } from "react";
import cls from "./style.module.scss";

interface Props {
  element: {
    id?: number;
    active?: boolean;
    title?: string;
    image?: string;
  };
  classes?: string;
  classBox?: string;
  setActive: Function;
  active?: any;
  multiple?: boolean;
}

const Select: FC<Props> = ({
  element,
  classes = "",
  classBox = "",
  active = [],
  setActive = () => {},
  multiple = false,
}) => {
  return (
    <div className={`w-full ${classes}`}>
      <div className={`${cls.imageBox} ${classBox}`}>
        <img className={cls.image} src={element?.image} alt={element.image} />
      </div>
      <div
        className={cls.checkbox}
        onClick={(e) => {
          e.stopPropagation();
          if (multiple) {
            if (active?.includes(element.id)) {
              setActive(active.filter((i: number) => i !== element.id))
            } else {
              setActive((prev?: any) => [...prev, element.id]);
            }
          } else {
            setActive([element.id]);
          }
        }}
      >
        <div className={cls.checkbox__check}>
          <div className={cls.checkbox__check__inner}>
            {active.length && active?.includes(element.id) ? (
              <img src="/svg/check-line.svg" alt="check" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <p className={cls.checkbox__text}>{element.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Select;
