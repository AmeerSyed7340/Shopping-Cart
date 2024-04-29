import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Appbar from "./components/AppBar";
import CartComp from "./components/CartComp";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("isOpen", isOpen);
  }
  , [isOpen]);
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar setIsOpen={setIsOpen} />
        {/* <VideoComp /> */}

        <Outlet />
          <CartComp isOpen={isOpen} setIsOpen={setIsOpen} />
      </ThemeProvider>
    </CartProvider>
  );
};

export default App;
