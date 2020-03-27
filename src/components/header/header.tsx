import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";
import IconButton from "@material-ui/core/IconButton";

interface IProps {
    onExportClick(): void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);
const  Header = (props: IProps)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {'Zones Drawer'}
          </Typography>
          <IconButton color="inherit" onClick = {()=>{props.onExportClick()}}>
            <GetAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;