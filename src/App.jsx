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
  const [total, setTotal] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />      
      <Appbar setIsOpen={setIsOpen}/>
      {/* <VideoComp /> */}

      <Outlet isOpen={isOpen} total={total} setTotal={setTotal}/>
      {isOpen && <CartComp isOpen={isOpen} setIsOpen={setIsOpen} total={total}/>}
    </ThemeProvider>
  );
};

export default App;
