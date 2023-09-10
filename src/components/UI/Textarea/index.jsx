import cls from "./style.module.scss";

const Textarea = ({ text = "", subtext = "", rows = 3, ...props }) => {
  return (
    <div className="w-full">
      {text ? <p>{text}</p> : ""}
      {subtext ? <span className="ml-2">{subtext}</span> : ""}
      <textarea
        className={cls.textarea}
        cols={30}
        rows={rows}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
