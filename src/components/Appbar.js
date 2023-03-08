import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  exitButton: {
    marginLeft: 'auto',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const handleExit = () => {
    window.location.href = 'https://gradico.com/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-08-at-6.40.22-PM-1024x536.jpeg';
  };
  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            SKCET
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            STUDENTS INFORMATION
          </Typography>
          <IconButton className={classes.exitButton} color="inherit" aria-label="exit" onClick={handleExit}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
        </AppBar>
        </div>
  );
}
