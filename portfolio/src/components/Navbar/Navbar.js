import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  CssBaseline
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import "./Navbar.css"

const Navbar = props => {
  const { classes } = props;
  return (
    
      <AppBar className={props.className} position="fixed">
      {props.children}
      </AppBar>
    
  );
};

export default (Navbar);
