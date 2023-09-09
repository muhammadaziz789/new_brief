// https://mui.com/material-ui/customization/theming/
import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

export default createTheme({
  palette: {
    black: {
      base: "#181729",
      lighten: "#55556E",
    },
    white: {
      lighten: "#fff",
    },
    ink: {
      base: "5122D6",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: `${rem(16)}`,
          paddingRight: `${rem(16)}`,
          "@media (min-width: 600px)": {
            paddingLeft: `${rem(50)}`,
            paddingRight: `${rem(50)}`,
          },
        },
        maxWidthLg: {
          "@media (min-width: 1280px)": {
            maxWidth: `${rem(1296)}`,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "none",
        },
      },
    },
  },
});
