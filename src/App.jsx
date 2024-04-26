import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/AppBar";

import { Outlet } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar />
      {/* <VideoComp /> */}
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
