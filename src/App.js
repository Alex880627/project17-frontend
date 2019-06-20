import React, { Component } from "react";
import pic1 from "./pic/pic1.jpg";
import pic2 from "./pic/pic2.jpg";
import pic3 from "./pic/pic3.jpg";
import pic4 from "./pic/pic4.jpg";
import pic5 from "./pic/pic5.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [pic1, pic2, pic3, pic4, pic5], currentPic: pic1 };
    this.carusel = this.carusel.bind(this);
    this.changePicByClick = this.changePicByClick.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.carusel();
    }, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  setNewInterval(){
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.carusel();
    }, 5000);
  }
  carusel() {
    document.querySelectorAll(".controll-buttons").forEach(element => {
      element.className = "controll-buttons";
    });
    let currentPicIndex;
    this.state.pictures.forEach((pic, index) => {
      if (pic === this.state.currentPic) {
        currentPicIndex = index;
      }
    });
    if (currentPicIndex < this.state.pictures.length - 1) {
      this.setState({ currentPic: this.state.pictures[currentPicIndex + 1] });
      document.getElementById(this.state.currentPic).className +=
        " active-button";
    } else {
      this.setState({ currentPic: this.state.pictures[0] });
      document.getElementById(this.state.currentPic).className +=
        " active-button";
    }
  }

  changePicByClick(event) {
    this.setNewInterval();
    this.setState({ currentPic: event.target.id });
    document.querySelectorAll(".controll-buttons").forEach(element => {
      element.className = "controll-buttons";
    });
    document.getElementById(event.target.id).className += " active-button";
  }

  render() {
    const {currentPic, pictures} = this.state; 
    return <div className="pic-galery">
      <Galery currentPic={currentPic} pictures={pictures} changePicByClick={this.changePicByClick} />
    </div>
  }
}

const Galery = ({currentPic, pictures, changePicByClick}) => {
  return (
    <>
      <img className="main-pic" src={currentPic} alt="gyógytorna-kép" />
      <div className="controll-buttons-wrapper">
        {pictures.map((element,index) => {
          return (
            <div
              className={index===0? "controll-buttons active-button":"controll-buttons"}
              id={element}
              onClick={changePicByClick}
            />
          );
        })}
      </div>
    </>
  );
};


export default App;
