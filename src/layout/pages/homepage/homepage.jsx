import React, { Component } from "react";
import "./homepage.css";
import Intro from "./intro/intro";
import Women from "./women/women";
import Men from "./men/men";

export default class Homepage extends Component {
  render(){
    return(
      <>
      <Intro />
      <Women />
      <Men />
      </>  
        )
  }
}
