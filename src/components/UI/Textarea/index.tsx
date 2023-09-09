import { FC } from "react";
import cls from "./style.module.scss";

interface Props {
  text?: string;
  subtext?: string
}

const Textarea: FC<Props> = ({ text = "", subtext = '', rows = 3  }) => {
  return (
    <div className="w-full">
      {text ? <p>{text}</p> : ""}
      {subtext ? <span className="ml-2">{subtext}</span> : ''}
      <textarea className={cls.textarea} cols={30} rows={rows}></textarea>
    </div>
  );
};

export default Textarea;
