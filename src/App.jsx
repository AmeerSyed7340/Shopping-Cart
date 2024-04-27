import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/AppBar";
import CartComp from "./components/CartComp";
import { useState } from "react";
import { Outlet } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <Appbar setIsOpen={setIsOpen}/>
      {/* <VideoComp /> */}

      <Outlet isOpen={isOpen}/>
      {isOpen && <CartComp isOpen={isOpen} setIsOpen={setIsOpen} />}
    </ThemeProvider>
  );
};

export default App;
