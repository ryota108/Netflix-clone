import React, { useEffect,useState } from "react";
import classes from "./NavBar.module.css";

function NavBar() { 
 const [show,handleShow] =useState(false);

 //React-intersection-observer
  return (
    <div className={`${classes.nav} ${show && classes.navBlack}`}>
      <img
        className={classes.navLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <img
        className={classes.navIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      />
    </div>
  );
}

export default NavBar;
