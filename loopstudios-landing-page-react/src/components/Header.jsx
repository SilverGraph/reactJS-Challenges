import React, {useState} from 'react';
import logo from './logo.svg'
import menuIcon from './icon-hamburger.svg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { motion } from "framer-motion"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 0",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Headers() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">

      <nav>
        <div className={classes.root}>
        <AppBar position="static" className="nav-center">
          <Toolbar variant="dense">

            <IconButton edge="start" className={`${classes.menuButton} "menu-icon"`} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit">
              <img src={logo} alt="" />
            </Typography>

            <div className="menu-items">
              <ul>
                <li><a href="#">About</a><hr/></li>
                <li><a href="#">Careers</a><hr/></li>
                <li><a href="#">Events</a><hr/></li>
                <li><a href="#">Products</a><hr/></li>
                <li><a href="#">Supporrt</a><hr/></li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        </div>
      </nav>

      <motion.div className="test" 
        layout
        transition={{duration: 0.25}}
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        // final={{ borderRadius: 50 }}
        onClick={() => setIsOpen(!isOpen)}></motion.div>
    </div>
  );
}
