import React from "react";
import { connect } from "react-redux";

import classes from "./NavigationItems.module.css";
import NavItem from "./NavigationItem/NavItem";
import NavButton from "./NavigationItem/NavButton";

import * as actions from "actions";

const navigationItems = props => {
  console.log(props.auth);
  return (
    <ul className={classes.NavigationItems}>
      <div className={classes.navLinkDiv}>
        <NavItem link={"/"}>Home</NavItem>
        {props.auth ? <NavItem link={"/post"}>Post A Comment</NavItem> : null}
      </div>

      <div className={classes.btn}>
        {!props.auth ? (
          <NavButton   click={() => props.changeAuth(true)}>Sign In</NavButton>
        ) : (
          <NavButton  click={() => props.changeAuth(false)}>Sign Out</NavButton>
        )}
      </div>
    </ul>
  );
};
const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  actions
)(navigationItems);
