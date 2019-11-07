import React from "react";
import pic7 from "../pic/pic7.jpg";

const CoverPic = () => {
  return (
    <div className="blur-img" style={{width: window.innerWidth<=1275? "1275px":"100%"}}>
      <img src={pic7}></img>
    </div>
  );
};

export default CoverPic;