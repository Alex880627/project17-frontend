import React, { Component } from "react";
import pic4 from "../pic/pic4.jpg";
import pic5 from "../pic/pic5.jpg";
import pic6 from "../pic/pic6.jpg";
import pic7 from "../pic/pic7.jpg";
import pic8 from "../pic/pic8.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [pic4, pic5, pic6, pic7, pic8],
      currentPic: 0,
      initialPicPosition: 0,
      picPosition: 0,
      slideShowDirectionVar: 1,
      innerWidth: window.innerWidth,
      scrollHeight: window.pageYOffset
    };
    this.changePicByClick = this.changePicByClick.bind(this);
    this.autoChangePic = this.autoChangePic.bind(this);
    this.changePicByArrows = this.changePicByArrows.bind(this);
    this.clearIntervalAndSetNew = this.clearIntervalAndSetNew.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.autoChangePic();
    }, 5000);
    window.addEventListener("resize", () => {
      this.setState({ innerWidth: window.innerWidth });
    });
    window.addEventListener("scroll", () => {
      this.setState({ scrollHeight: window.pageYOffset });
    });
  }
  calculateScreen() {
    return window.screen.availHeight*1.77777777777
  }
  calculateOffset() {
    return (
      ((this.calculateScreen()) -
        this.state.innerWidth) /
      2
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", () => {
      this.setState({ innerWidth: this.state.innerWidth });
    });
    window.removeEventListener("scroll", () => {
      this.setState({ scrollHeight: window.pageOffset });
    });
  }
  updateStateWithDirection(slideShowDirectionVar, currentPic) {
    const { pictures } = this.state;
    if (currentPic > -1 && currentPic < pictures.length) {
      this.setState(prevState => ({
        currentPic: Number(prevState.currentPic) + slideShowDirectionVar,
        picPosition:
          this.state.initialPicPosition -
          (Number(currentPic) + slideShowDirectionVar) *
            this.calculateScreen()
      }));
    }
  }
  autoChangePic() {
    const { currentPic, pictures, slideShowDirectionVar } = this.state;
    if (currentPic < pictures.length - 1 && slideShowDirectionVar !== -1) {
      this.updateStateWithDirection(slideShowDirectionVar, currentPic);
      if (currentPic === pictures.length - 2) {
        this.setState({
          slideShowDirectionVar: -1
        });
      }
    } else {
      this.updateStateWithDirection(slideShowDirectionVar, currentPic);
      if (currentPic === 1) {
        this.setState({
          slideShowDirectionVar: 1
        });
      }
    }
  }
  clearIntervalAndSetNew() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.autoChangePic();
    }, 5000);
  }
  changePicByClick(event) {
    const { pictures } = this.state;
    this.clearIntervalAndSetNew();
    this.setState({
      currentPic: event.target.id,
      picPosition:
        this.state.initialPicPosition -
          event.target.id * this.calculateScreen()
    });
    if (Number(event.target.id) === 0 || Number(event.target.id) === 1) {
      this.setState({
        slideShowDirectionVar: 1
      });
    } else if (
      Number(event.target.id) === pictures.length - 1 ||
      Number(event.target.id) === pictures.length - 2
    ) {
      this.setState({
        slideShowDirectionVar: -1
      });
    }
  }
  onMouseOut = () => {
    this.clearIntervalAndSetNew();
  };
  onMouseOver = () => {
    clearInterval(this.interval);
  };
  changePicByArrows(event) {
    const direction = event.target.className;
    const { currentPic, pictures } = this.state;
    this.clearIntervalAndSetNew();
    if (Number(currentPic) < pictures.length - 1 && Number(currentPic) > 0) {
      if (direction.includes("left")) {
        this.updateStateWithDirection(-1, currentPic);
        this.setState({
          slideShowDirectionVar: 1
        });
      } else {
        this.updateStateWithDirection(1, currentPic);
        this.setState({
          slideShowDirectionVar: -1
        });
      }
    } else if (Number(currentPic) === 0) {
      this.setState({
        slideShowDirectionVar: 1
      });
      direction.includes("right") &&
        this.updateStateWithDirection(1, currentPic);
    } else if (Number(currentPic) === pictures.length - 1) {
      this.setState({
        slideShowDirectionVar: -1
      });
      direction.includes("left") &&
        this.updateStateWithDirection(-1, currentPic);
    }
  }
  render() {
    const { currentPic, pictures, picPosition } = this.state;
    return (
      <div className="pic-galery-wrapper">
        <div
          className="pic-galery"
          onMouseOut={this.onMouseOut}
          onMouseOver={this.onMouseOver}
        >
          {/*  <div onClick={this.changePicByArrows} className="arrow left">
            <div />
          </div>
          <div onClick={this.changePicByArrows} className="arrow right">
            <div />
          </div> */}
         <div className="controll-buttons-wrapper" style={this.state.scrollHeight>200 || window.innerWidth<769? {visibility:"hidden"}:{visibility:"visible"}}>
            {pictures.map((picture, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  onClick={this.changePicByClick}
                  className={
                    index === Number(currentPic)
                      ? "controll-button active-button"
                      : "controll-button"
                  }
                />
              );
            })}
          </div>
          <div
            className="pictures-wrapper"
            style={{
              left: `${picPosition - this.calculateOffset()}px`,
              transition: "left 0.6s ease-in"
            }}
          >
            {pictures.map((picture, index) => {
              return (
                <img
                  style={{
                    width:
                    this.calculateScreen()
                  }}
                  src={picture}
                  id={index}
                  alt="gyógytorna"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
