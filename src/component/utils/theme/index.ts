import { createTheme } from "@mui/material/styles";
/** 
* default theme
* reference: https://mui.com/material-ui/customization/default-theme/
*/
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
/**
* define more custom theme with custom settings inside
*/