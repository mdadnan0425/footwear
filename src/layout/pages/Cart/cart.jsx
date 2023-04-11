import React, { Component } from 'react';
import "./cart.css"
import white from "../../../assets/white.png";
import red from "../../../assets/red.png"; 
import yellow from "../../../assets/yellow.png";
import pink from "../../../assets/pink.png"

export default class Cart extends Component {
    render() {
        return (
            <div className="main">
                <div className="left">
                    <div className="first">
                    <div className="likes">
                        <div className="rotate"><img src={white} alt=""/></div>
                        <div className="rotate"><img src={white} alt=""/></div>
                        <div className="rotate"><img src={white} alt=""/></div>
                        <div className="rotate"><img src={white} alt=""/></div>
                        <div className="rotate"><i class="fas fa-heart"></i></div>
                    </div>
                    <div className="price">
                        <img src={white} alt="white"/>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h3>Rs 2500/</h3>
                        <div className="buynow">
                            <button className="btns">Buy now</button>
                            <button className="btns">Add to cart</button>
                        </div>
                    </div>
                    </div>

                </div>
                <div className="right">
                    <h1>Specifiction</h1>
                    <h3>Product : Men's shoes</h3>
                    <h3>Price :Rs 3000/</h3>
                    <h3>Colour : White</h3>
                    <h3>Size : 7</h3>
                    <h3>Quantity : 1</h3>
                    <h2>Description :</h2>
                    <p id="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nisi, numquam blanditiis pariatur accusamus eos sequi
                          dolore accusantium quia distinctio odit eligendi eius
                           esse rerum eveniet officia ipsa veniam? Esse libero
                            placeat voluptate quasi voluptatem quo. Culpa, ullam.
                             Laboriosam ducimus aperiam fuga omnis animi repellendus
                              velit delectus corrupti minima nulla sapiente, dolore
                               aspernatur id cumque provident, veritatis, assumenda
                                voluptatibus laudantium perferendis!</p>
                                <div className="subqty">
                                <div className="quantity">
                                        <div className="box">
                                        <i class="fas fa-plus"></i>
                                        <span>7</span>
                                        <i class="fas fa-minus"></i>
                                        </div>
                                        <h2>Size</h2>
                                </div>
                                <div className="quantity">
                                        <div className="box">
                                        <i class="fas fa-plus"></i>
                                         <span>1</span>
                                         <i class="fas fa-minus"></i>
                                    </div>
                                        <h2>Quantity</h2>
                                </div>
                                </div>
                                <p>Available Offers</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Quas, expedita? Sit, tenetur minus dolorum nostrum
                                      dolorem iusto beatae dolores similique.</p>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Quas, expedita? Sit, tenetur minus dolorum nostrum
                                      dolorem iusto beatae dolores similique.</p>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Quas, expedita? Sit, tenetur minus dolorum nostrum
                                      dolorem iusto beatae dolores similique.</p>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Quas, expedita? Sit, tenetur minus dolorum nostrum
                                      dolorem iusto beatae dolores similique.</p>
                </div>
            </div>
        )
    }
}
