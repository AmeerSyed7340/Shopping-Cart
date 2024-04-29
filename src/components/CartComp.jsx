import * as React from "react";
import { Slide, Stack, Box, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { useCart } from "../contexts/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";

const CartComp = ({ isOpen, setIsOpen }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  //consume the context values
  const { products, setProducts, setTotal } = useCart();

  //immutable way to update the count
  const handleAdd = (productId) => {
    // setProducts((currentProducts) =>
    //   currentProducts.map((product) =>
    //     product.id === productId
    //       ? { ...product, count: product.count + 1 }
    //       : product
    //   )
    // );
    // setTotal((prevTotal) => prevTotal + 1);
  };

  const handleRemove = (productId) => {
    // setProducts((currentProducts) =>
    //   currentProducts.map((product) =>
    //     product.id === productId
    //       ? { ...product, count: product.count - 1 }
    //       : product
    //   )
    // );
    // setTotal((prevTotal) => prevTotal - 1);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const newTotalPrice = products.reduce(
      (sum, product) => sum + product.price * product.count,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [products]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      transitionDuration={1000}
      keepMounted
      onClose={handleClickClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          height: "100vh",
          maxHeight: "100vh",
          minWidth: "500px",
          marginTop: "0px",
          marginLeft: "auto",
          marginBottom: "0px",
          marginRight: "0px",
          borderRadius: "0px",
        },
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
          {"SHOPPING BAG"}
        </DialogTitle>
        <DialogActions>
          {/* <Button onClick={handleClickClose}>No</Button> */}
          <IconButton onClick={handleClickClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Stack>
      <DialogContent>
        <Grid container justifyContent="center">
          {products
            .filter((product) => product.count > 0)
            .map((product) => (
              <Grid
                item
                key={product.id}
                xs={12}
                sx={{
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    sx={{
                      height: 200,
                      objectFit: "contain",
                    }}
                    src={product.image}
                  ></Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                    sx={{ width: "150px", margin: 0 }}
                  >
                    <DialogContentText>{product.title}</DialogContentText>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleRemove(product.id)}
                      >
                        <RemoveIcon />
                      </Button>
                      <DialogContentText>{product.count}</DialogContentText>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleAdd(product.id)}
                      >
                        <AddIcon />
                      </Button>
                    </Stack>
                    <DialogContentText>
                      {product.price * product.count}
                    </DialogContentText>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          <DialogContentText sx={{ fontWeight: "bold", marginTop: "50px" }}>
            Total: {totalPrice}
          </DialogContentText>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CartComp;
