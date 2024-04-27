import * as React from "react";
import { Slide, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

const CartComp = ({ isOpen, setIsOpen }) => {
  
  const handleClickClose = () => {
    setIsOpen(false);
  };

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
        <DialogContentText id="alert-dialog-description">
          Let Google
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default CartComp;
