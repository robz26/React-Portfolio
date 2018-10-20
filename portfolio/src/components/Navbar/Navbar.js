import React from "react";
import { AppBar } from "@material-ui/core";
import "./Navbar.css";

const Navbar = props => {
  return (
    <AppBar className={props.className} position="fixed">
      {props.children}
    </AppBar>
  );
};

export default Navbar;
