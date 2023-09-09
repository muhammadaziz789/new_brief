import { FC } from "react";
import cls from "../style.module.scss";

interface Props {
	element: any
}
const Element: FC<Props> = ({ element }) => {
  return (
    <li>
      <div className={cls.box}>
        <img src={element?.icon} alt={element?.icon} />
      </div>
      <p className={cls.list__text}>{element.title}</p>
    </li>
  );
};

export default Element;
