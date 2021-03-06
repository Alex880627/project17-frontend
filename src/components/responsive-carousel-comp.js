import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic4 from "../pic/pic4.jpg";
import pic5 from "../pic/pic5.jpg";
import pic6 from "../pic/pic6.jpg";
import pic7 from "../pic/pic7.jpg";
import pic8 from "../pic/pic8.jpg";

class ResponsiveCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [pic4, pic5, pic6, pic7, pic8],
      pictureWidth: ""
    };
  }
  componentDidMount(){
    this.calsculateScreen();
  }
  calsculateScreen(){
    window.innerWidth/window.innerHeight<1.9?
    this.setState({pictureWidth: "1285px"}):this.setState({pictureWidth: "100%"})
  }
  render (){
    return(<Carousel
    className="carousel-fixed"
      swipeScrollTolerance
      showArrows={false}
      width={"1275px"}
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={7000}
      infiniteLoop
      showIndicators={window.innerWidth>768? true:false}
    >
      {this.state.pictures.map(element => {
        return (
          <div>
            <img src={element} />
          </div>
        );
      })}
    </Carousel>
  )}
    
};

export default ResponsiveCarousel;
