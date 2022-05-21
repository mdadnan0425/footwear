import React, { Component } from 'react'
import './women.css';
import heels from "../../../../assets/heels.png";
import pink from "../../../../assets/pink.png";
import brown from "../../../../assets/brown.png";
import boot from "../../../../assets/boot.png"
import sandle from "../../../../assets/sandle.png";

export default class Women extends Component {
    render() {
        return (
            <div id ="open" className="header2">
                <div className="sec2">
          <div className="lady">
            <div className="style">
              <img src={heels} alt="highheels1" />
              <h1>
                Form your <span>Own Style</span>
              </h1>
            </div>
            <p>Womens footwear</p>
          </div>
          <div className="girlscontainer">
            <i id="arrow" class="fas fa-arrow-circle-left"></i>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={pink} alt="pinkgirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={brown} alt="browngirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={boot} alt="bootgirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={sandle} alt="sandlegirl" />
              <button>Buy Now</button>
            </div>
            <i id="arrow" class="fas fa-arrow-circle-right"></i>
            <i id="arrow" class="fas fa-arrow-circle-left"></i>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={pink} alt="pinkgirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={brown} alt="browngirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={boot} alt="bootgirl" />
              <button>Buy Now</button>
            </div>
            <div className="box">
              <i class="fas fa-shopping-cart"></i>
              <img src={sandle} alt="sandlegirl" />
              <button>Buy Now</button>
            </div>
            <i id="arrow" class="fas fa-arrow-circle-right"></i>
            <button id="more" >See more</button>
          </div>
        </div>
            </div>
        )
    }
}
