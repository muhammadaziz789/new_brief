import cls from "./style.module.scss";
import OutsideClickHandler from "react-outside-click-handler";

const ContextMenu = ({
  children,
  position,
  visible,
  classes,
  closeContextMenu = () => {},
}) => {
  if (!visible) return null;

  const style = {
    top: position.y,
    left: position.x,
  };

  const outsideClickHandler = (event) => {
    if (event.which === 3) return null;
    closeContextMenu(event);
  };

  return (
    <div
      className={`${cls.contextMenu} rounded-[10px] w-[100%] ${classes}`}
      style={style}
    >
      <OutsideClickHandler onOutsideClick={outsideClickHandler}>
        {children}
      </OutsideClickHandler>
    </div>
  );
};

export default ContextMenu;
