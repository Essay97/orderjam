import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { lime, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme();

theme = createTheme({
  palette: {
    primary: amber,
    secondary: {
      main: lime[900],
    },
  },
  typography: {
    label: {
      fontWeight: 500,
      textTransform: "uppercase",
      fontSize: 20,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
