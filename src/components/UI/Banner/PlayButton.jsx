import { Button, IconButton } from "@mui/material";
import cls from "./style.module.scss";
export default function PlayButton({ handleClick = () => {}, children }) {
  const customizatio = {
    color: "red",
    "&": {
      borderRadius: "50%",
      height: "48px",
      width: "48px",
      border: `1px solid #5122D6`,

      "&:hover, &.Mui-focusVisible": {
        backgroundColor: "#5122D611",
      },
    },
  };

  return (
    <IconButton
      aria-label="delete"
      size="large"
      sx={customizatio}
      className="bg-[#5122D611]"
      onClick={() => handleClick()}
    >
      {children}
    </IconButton>
  );
}
