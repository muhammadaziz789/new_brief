import cls from "../style.module.scss";

const Element = ({ element }) => {
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
