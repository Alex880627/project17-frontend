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
      innerWidth: window.innerWidth,
      scrollHeight: window.pageYOffset,
      myRef: React.createRef()
    };
  }
  render (){
    console.log(this.state.myRef);
    
    return(<Carousel
    className="carousel-fixed"
    ref={this.state.myRef}
      emulateTouch
      swipeScrollTolerance
      showArrows={false}
      width={1265}
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={5000}
      infiniteLoop
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
