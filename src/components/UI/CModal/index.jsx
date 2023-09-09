import { Close } from "@mui/icons-material";
import { IconButton, Modal } from "@mui/material";
import { CCard } from "../CCards/CCard";
import CButton from "../CButton";
import useTranslation from "next-translate/useTranslation";
export default function CModal({
  header = true,
  footer = true,
  width = "500px",
  closeIcon = false,
  headerTitle = "Title",
  headerText = "",
  buttonText = "",
  extraHeader,
  extraFooter,
  buttonClasses,
  cardClasses = "",
  onClose = () => {},
  handleClick = () => {},
  children,
}) {
  const { t } = useTranslation("common");
  const styleModal = {
    backgroundColor: "#00000077",
  };
  return (
    <Modal
      open
      className="flex items-center justify-center overflow-auto"
      onClose={onClose}
      style={styleModal}
    >
      <CCard width={width} classes={cardClasses}>
        {header ? (
          <header className="text-center relative">
            {extraHeader || (
              <div>
                <h3 className={`text-blackLight text-[24px] font-[700]`}>
                  {t(headerTitle)}
                </h3>
                <p className={`text-[14px] text-graySecondry mt-2 px-10`}>
                  {t(headerText)}
                </p>

                {closeIcon && (
                  <IconButton
                    className={`absolute right-0 top-0`}
                    onClick={onClose}
                  >
                    <Close className={``} />
                  </IconButton>
                )}
              </div>
            )}
          </header>
        ) : (
          ""
        )}
        <div>{children}</div>
        {footer ? (
          <footer>
            {extraFooter || (
              <div>
                <CButton
                  text={buttonText}
                  classes={`w-full h-[56px] ${buttonClasses}`}
                  handleClick={handleClick}
                />
              </div>
            )}
          </footer>
        ) : (
          ""
        )}
      </CCard>
    </Modal>
  );
}
