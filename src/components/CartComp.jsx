import { Box } from "@mui/material";

const CartComp = ({isOpen}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        width: 300,
        height: "100vh",
        background: "white",
        boxShadow: "0px 0 10px rgba(0,0,0,0.1)",
        transform: isOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 3s ease-in-out",
        zIndex: 1300
      }}
    >
      <h1>Cart</h1>
    </Box>
  );
};

export default CartComp;
