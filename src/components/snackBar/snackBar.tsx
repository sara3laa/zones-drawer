import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps,Color } from "@material-ui/lab/Alert";
interface IProps {
  message: string;
  type: Color ;
  handleClose: () => void;
  open: boolean;

}
const Alert = (props: AlertProps)  =>{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const SnackBar = (props:  IProps) => {
     const vertical = 'top';
     const horizontal = 'center';
  return (
    <div>
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={props.open}
      onClose={props.handleClose}
      message={props.message}
    >
      <Alert onClose={props.handleClose} severity={props.type}>
        {props.message}
      </Alert>
    </Snackbar>
  </div>

  );
}
export default SnackBar;