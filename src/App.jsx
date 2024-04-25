import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/AppBar";
import VideoComp from "./components/VideoComp";

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
      <VideoComp />
    </ThemeProvider>
  );
};

export default App;
