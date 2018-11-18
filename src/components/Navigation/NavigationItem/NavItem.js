import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";

const navItem = props => {
  return (
    <li className={classes.NavItem}>
      <NavLink
        to={props.link}
        // for fixing the always active link use exact
        exact
        // activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default navItem;