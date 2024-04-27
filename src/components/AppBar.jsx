import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Appbar = ({ setIsOpen }) => {
  const location = useLocation();
  console.log(location.pathname);
  const [isHovered, setIsHovered] = useState(false);

  const isProductPage = location.pathname === "/products";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position={isProductPage ? "sticky" : "fixed"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          background: isProductPage ? "black" : "transparent",
          color: "white",
          boxShadow: "none",
          ":hover": {
            background: isProductPage ? "black" : "white",
            color: isProductPage ? "white" : "black",
          },
          transition: "background 0.8s ease",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isProductPage && (
            <IconButton>
              <Link to="/">
                <HomeOutlinedIcon sx={{ color: "white" }} />
              </Link>
            </IconButton>
          )}
          {/* Left side - Logo and Navigation Links */}
          <Stack
            direction="column"
            flexGrow="2"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
              }}
            >
              FAKE STORE
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              sx={{
                opacity: isHovered ? 1 : 0,
                maxHeight: isHovered ? "100px" : "0px",
                overflow: "hidden",
                transition: "opacity 0.5s ease, maxHeight 0.5s ease",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                MEN
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                WOMEN
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                JEWELRY
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
              >
                ELECTRONICS
              </Typography>
            </Stack>
          </Stack>
          {/* Right side - Cart (conditionally displayed) */}
          {isProductPage && (
            <Badge
              badgeContent={144}
              max={999}
              color="primary"
              onClick={() => setIsOpen(true)}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              <ShoppingBagOutlinedIcon />
            </Badge>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
