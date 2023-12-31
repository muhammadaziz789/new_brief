import cls from "./style.module.scss";

const Select = ({
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
            if (active?.includes(element.key)) {
              setActive(active.filter((i) => i !== element.key));
            } else {
              setActive((prev) => [...prev, element.key]);
            }
          } else {
            setActive([element.key]);
          }
        }}
      >
        <div className={cls.checkbox__check}>
          <div className={cls.checkbox__check__inner}>
            {active.length && active?.includes(element.key) ? (
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
