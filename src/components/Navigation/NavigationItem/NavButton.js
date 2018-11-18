import React from "react";

import  classes  from 'components/Navigation/NavigationItems.module.css';

const navButton = props => {
  return (
    <li >
      <button className={classes.navBtn} onClick={props.click}>{props.children}</button>
    </li>
  );
};

export default navButton;
