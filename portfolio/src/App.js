import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar/Navbar";
import Grid from '@material-ui/core/Grid';
import "./cover.css";
import { Parallax } from 'react-scroll-parallax';
import Image from "./components/Image/Image"

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Navbar className="navBar">
          <Grid container justify="center">
          <a className="nav-link active" href="#here">
            Home
          </a>
          <a className="nav-link" href="#About">
            About
          </a>
          <a className="nav-link" href="#Portfolio">
            Portfolio
          </a>
          <a className="nav-link" href="#Contact">
            Contact
          </a>
          </Grid>
        </Navbar>
        <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        {/* <Image src="./pexels-photo-355887.jpeg" /> */}
    </Parallax>
      </CssBaseline>
    );
  }
}

export default App;
