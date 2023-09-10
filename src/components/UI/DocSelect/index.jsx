import cls from "./style.module.scss";

const DocSelect = ({ element, handleCheck, classes = "", classBox = "" }) => {
  return (
    <div className={`w-full ${classes}`}>
      <div className={`${cls.imageBox} ${classBox}`}>
        <img
          className={cls.image}
          src={element?.image}
          alt={element.image || "image"}
        />

        <div className={cls.logos}>
          {element.logos?.map((logo) => (
            <div key={logo} className={cls.logo}>
              {logo ? <img src={logo} alt={logo} /> : ""}
            </div>
          ))}
        </div>
      </div>
      <div
        className={cls.checkbox}
        onClick={(e) => {
          e.stopPropagation();
          handleCheck(element);
        }}
      >
        <div className={cls.checkbox__check}>
          <div className={cls.checkbox__check__inner}>
            {element.active ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
              </svg>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <p className={cls.checkbox__text}>{element.title}</p>
          {element.subtitle ? (
            <p className={cls.checkbox__text}>{element.subtitle}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DocSelect;
