import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { motion } from "framer-motion"

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

  const [showLinks, setShowLinks] = useState(false);
  const header = useRef(null);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const openMenu = useRef(null);
  const closeMenu = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const displayWidth = header.current.getBoundingClientRect().width;
    // console.log(typeof(displayWidth));

    if (showLinks && displayWidth <= 376) {
      linksContainerRef.current.style.height = `max-content`;
      openMenu.current.style.visibility = 'hidden'
      closeMenu.current.style.visibility = 'visible'
      linksRef.current.style.visibility = 'visible'
      document.body.style.overflow = "hidden"
      // window.location.reload();
    } if(!showLinks && displayWidth <= 376) {
      linksContainerRef.current.style.height = '0';
      openMenu.current.style.visibility = 'visible'
      closeMenu.current.style.visibility = 'hidden'
      linksRef.current.style.visibility = 'hidden'
      document.body.style.overflow = "visible"
      // window.location.reload();
    }
  }, [showLinks]);

  return (
    <div className="header" ref={header}>

      <nav>
        <div className={classes.root} id="nav-div">
        <AppBar position="static" className="nav-center">
          <Toolbar variant="dense">

            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" id="menu-div">
              <MenuIcon id="menu-icon" onClick={toggleLinks} ref={openMenu} />
              <CloseIcon id="close-icon" onClick={toggleLinks} ref={closeMenu}/>
            </IconButton>

            <Typography variant="h6" color="inherit">
              <img src="../../images/logo.svg" alt="" />
            </Typography>

            <div className="menu-items" ref={linksContainerRef}>
              <ul ref={linksRef}>
                <span>
                <li><a href="/">About</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Support</a></li>
                </span>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
        </div>
      </nav>

      {/* <motion.div className="test" 
        layout
        transition={{duration: 0.25}}
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        // final={{ borderRadius: 50 }}
        onClick={() => setIsOpen(!isOpen)}
      ></motion.div> */}

      <div className="banner-text">
        <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </div>
      
    </div>
  );
}
