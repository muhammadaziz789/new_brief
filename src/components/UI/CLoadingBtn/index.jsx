import useTranslation from "next-translate/useTranslation";
import CircularProgress from "@mui/material/CircularProgress";

export default function CLoadingBtn({ ...props }) {
  const {
    type = "button",
    text = "save",
    loading = false,
    translation = "common",
    loadingPosition = "start",
    classes = "",
    styles = {},
    disabled = false,
    handleClick = () => {},
  } = props;
  const { t } = useTranslation(translation);

  return (
    <button
      onClick={() => handleClick()}
      className={`bg-ink h-[48px] rounded-[10px] px-[28px] text-[#fff] flex items-center justify-center gap-[12px] ${
        loading || disabled ? "bg-grayDarker" : "cursor-pointer"
      } ${classes}`}
      disabled={loading || disabled}
      type={type}
      style={{
        ...styles,
        background:
          disabled || loading
            ? "#A4AFC1"
            : styles?.background
            ? styles?.background
            : "#5122D6",
      }}
    >
      {loadingPosition === "end" && <> {t(text, `${translation}: ${text}`)}</>}
      {loading && (
        <CircularProgress
          style={{
            color: "white",
            width: "20px",
            height: "20px",
          }}
        />
      )}
      {loadingPosition === "start" && (
        <> {t(text, `${translation}: ${text}`)}</>
      )}
    </button>
  );
}
