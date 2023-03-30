import React, { Component } from 'react'
import './intro.css';
import red from "../../../../assets/red.png"
import white from "../../../../assets/white.png"
import yellow from "../../../../assets/yellow.png"

export default class Intro extends Component {

  constructor(props){
    super(props);
    this.state = {
      first : 0,
      color:[ "#e5e5e5","#FBD0D8","#FEF9E8" ],
      color2:["#4d3f4c","#E9173B","#FFCC00"],
      tab : 0,
      adjust:["","100px","320px"],
      adjust2:["","550px","515px"],
      adjust3:["","380px",""],
      move:["","310px","60px",""],
      move2:["","112px","1200px",""],
      move3:["","280px","280px",""],
      turn:["","100px","190px",""],
      turn1:["","1200px","514px",""],
      turn2:["","130px","225px"]
    }
  }
    
    changeleft(){
      if(this.state.first<3) {
        this.setState({first:this.state.first+1})
      }
      else{
        this.setState({first:0})
      }
      if (this.state.tab<3) {
        this.setState({tab:this.state.tab+1})
  
        }
        else{
          this.setState({tab:0})
        }
    }

    render() {
        return (
            <div className="header2">
        <div className="sec1"
        style={{backgroundColor: this.state.color[this.state.first]}}
        >
        <div className="upperline">
          <div style={{backgroundColor: this.state.color2[this.state.first]}}></div>
          <div style={{backgroundColor: this.state.color2[this.state.first]}}></div>
          <div style={{backgroundColor: this.state.color2[this.state.first]}}></div>
        </div>
        <div className="circle"></div>
        <div className="card2"
        style={{backgroundColor: this.state.color2[this.state.first]}}
        >
            <h2>Rs 1200/</h2>
            <div className="size">
                <h3>Size:</h3>
                <div className="number">
                    <div>7</div>
                    <div>8</div>
                    <div>10</div>
                    <div>11</div>
                </div>
            </div>
            <div className="add">
                <h4>Add to cart</h4>
            </div>
        </div>
        <div className="imgcontainer">
          <img className="r1" src={red} alt="laal"
          style={{top:this.state.adjust[this.state.tab],right:this.state.adjust2[this.state.tab],
          height:this.state.adjust3[this.state.tab],transition: ".8s",
          }}
          />
          <img className="w1" src={white} alt="sada"
          style={{top:this.state.move[this.state.tab],right:this.state.move2[this.state.tab],
          width:this.state.move3[this.state.tab],transition: ".8s",
          }}
          />
          <img className="y1" src={yellow} alt="pila"
          style={{top:this.state.turn[this.state.tab],right:this.state.turn1[this.state.tab],
          height:this.state.turn2[this.state.tab],transition: ".8s",
          }}
          />
          </div>
          <div className="detail">
            <div className="buy">
            <i class="fas fa-arrow-circle-left"
        style={{color: this.state.color2[this.state.first]}}
        onClick={()=>{this.changeleft()}}
            
            ></i>
            <button
            style={{backgroundColor: this.state.color2[this.state.first]}}
             >Buy Now</button>
            <i class="fas fa-arrow-circle-right"
            onClick={()=>{this.change()}}
        style={{color: this.state.color2[this.state.first]}}

            ></i>
            </div>
            <div className="lower">
              <div className="left">
                <h1>3</h1>
                <div className="wbr">
                  <h2>Colors available</h2>
                  <div className="white"><div className="w"></div>White</div>
                  <div className="white"><div className="b"></div>Blue</div>
                  <div className="white"><div className="r"></div>Red</div>
                </div>
              </div>
              <div className="right">
                <h1>Loafer Shoes</h1>
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          </div>
          </div>
        )
    }
}
