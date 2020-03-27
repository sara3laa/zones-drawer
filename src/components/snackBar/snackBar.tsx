import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps,Color } from "@material-ui/lab/Alert";
 interface State extends SnackbarOrigin {
  open: boolean;
}
interface IProps {
  isOpen : boolean;
  message: string;
  type: Color ;
}
const Alert = (props: AlertProps)  =>{
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const SnackBar = (props:  IProps) => {
  const [state, setState] = React.useState<State>({
    open: props.isOpen,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      key={`${vertical},${horizontal}`}
      open={open}
      onClose={handleClose}
      message="I love snacks"
    >
      <Alert onClose={handleClose} severity={props.type}>
        {props.message}
      </Alert>
    </Snackbar>
  </div>

  );
}
export default SnackBar;