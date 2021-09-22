import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  checkCircle : {
    textAlign : "center"
  }
})
)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomDialogBox({
  openConfirmation,
  openThanks,
  handleClose,
  submit,
  dialogTitle,
  dialogContent,
}) 
{
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={openConfirmation || openThanks}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" className = {classes.checkCircle}>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {handleClose  && <Button onClick={handleClose}>Disagree</Button>}
          {submit && <Button onClick={submit}>Agree</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialogBox;
