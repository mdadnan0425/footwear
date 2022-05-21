import React, { Component } from 'react';
import "./footer.css";
import "../../../assets/shop.png";
import angle from "../../../assets/angle.png"
export default class Footer extends Component {
    render() {
        return (
            <div className="footermain">
                <div className="over"></div>
                <img src={angle} alt=""/>
                <h1>Shoefy</h1> 
                <div className="container">
                    <div className="items">
                        <h2>Products</h2>
                        <ol>
                            <li>Mens shoe</li>
                            <li>Womens shoe</li>
                            <li>Kids shoe</li>
                            <li>Slippers</li>
                        </ol>
                    </div>
                    <div className="items">
                        <h2>Contact Us</h2>
                        <ol>
                            <li><i class="fas fa-phone-alt"></i> +91 1234567890</li>
                            <li><i class="fas fa-phone-alt"></i> +91 1234567890</li>
                            <li><i class="fas fa-envelope"></i> abc145@gmail.com</li>
                        </ol>
                    </div>
                    <div className="items">
                        <h2>About us</h2>
                        <ol>
                            <li>About Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privicy Policy</li>
                        </ol>
                    </div>
                </div>
                <div className="line"></div>
                <h4>©2021-Copyright all rights reserved</h4>
            </div>   
        )
    }
}
