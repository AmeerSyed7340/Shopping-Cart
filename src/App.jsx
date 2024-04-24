import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi non
        quas iure error debitis repellendus voluptatibus, minima iste cumque
        pariatur voluptate quae porro dolorum eveniet itaque velit praesentium
        aut explicabo.
      </div>
    </ThemeProvider>
  );
};

export default App;
