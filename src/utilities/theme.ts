import { createTheme } from "@mui/material";
import { Colors } from "./styles";

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: palette.augmentColor({ color: { main: Colors.PRIMARY } }),
    secondary: palette.augmentColor({ color: { main: Colors.SECONDARY } }),
    error: palette.augmentColor({ color: { main: Colors.ERROR } }),
    success: palette.augmentColor({ color: { main: Colors.SUCCESS } }),
    info: palette.augmentColor({ color: { main: Colors.INFO } }),
    warning: palette.augmentColor({ color: { main: Colors.WARNING } }),
  },
});

export default theme;
