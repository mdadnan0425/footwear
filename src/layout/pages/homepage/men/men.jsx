import React, { Component } from 'react'
import './men.css';
import formal from "../../../../assets/formal.png";
import sports from "../../../../assets/sports.png";
import casual from "../../../../assets/casual.png";

export default class Men extends Component {
    render() {
        return (
            <div id="open2" className="header2">
                <div className="sec3">
          <div className="men">
            <img src={formal} alt="formal.png" />
            <h1>
              Why should women have all the <span>FUN</span>
            </h1>
          </div>
          <div className="shopping">
            <div className="left">
              <h2>Men's Footwear</h2>
              <div className="specs">SPECS</div>
              <div className="swip">
                <h1>SWIP SOP</h1>
                <h4>SIZE : 8 9 10 12</h4>
                <h4>COLOR : RED, BLUE, GREEN</h4>
                <h1>ABOUT</h1>
                <p>
                  Lorem, ipsum dolor sit amet lawda consectetur adipisicing
                  elit. Sunt quis fugiat lahsun laudantium voluptatum dicta
                  sapiente maiores or necessitatibus facere impedit eius!
                </p>
              </div>
            </div>
            <div className="right">
              <i id="upar" class="fas fa-chevron-up"></i>
              <div className="box2">
                <i class="fas fa-shopping-cart"></i>
                <img src={sports} alt="sportsmen" />
                <div className="star">
                <button>Buy Now</button>
                
                </div>
              </div>
              <div className="box2">
                <i class="fas fa-shopping-cart"></i>
                <img src={sports} alt="sportsmen" />
                <button>Buy Now</button>
              </div>
              <i id="upar" class="fas fa-chevron-down"></i>
              <div className="box2">
                <i class="fas fa-shopping-cart"></i>
                <img src={casual} alt="casualmen" />
                <button>Buy Now</button>
              </div>
              <div className="box2">
                <i class="fas fa-shopping-cart"></i>
                <img src={casual} alt="casualmen" />
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
            </div>
        )
    }
}
