import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";

import { useState } from "react";
const Appbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          background: "transparent",
          color: "white",
          boxShadow: "none",
          ":hover": { background: "white", color: "black" },
          transition: "background 0.8s ease",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              flexGrow: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              FAKE STORE
            </Typography>
            {isHovered && (
              <>
                <Stack direction="row" spacing={4}>
                  <Typography
                    variant="h6"
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    MEN
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    WOMEN
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    JEWELRY
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    ELECTRONICS
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
