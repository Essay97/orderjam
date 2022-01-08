import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { brown, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme();

theme = createTheme({
  palette: {
    primary: amber,
    secondary: {
      main: brown[600],
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
