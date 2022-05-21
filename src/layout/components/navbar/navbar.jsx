import React, { Component } from "react";
import "./navbar.css";
import logo from "../../../assets/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <div className="item">
          <img src={logo} alt="logofoot" />
          <a className="linkd" href="/#open2">
            Men
          </a>
          <a href="/#open">Women</a>
          <a href="/cart">Kids</a>
          <a href="/cart">Sports</a>
          <a href="/about">About Us</a>
        </div>
        <div className="shop">
          <i class="fas fa-home"></i>
          <i class="fas fa-user-alt"></i>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </div>
    );
  }
}
