import React from "react";
import pic7 from "../pic/pic7.jpg";

const CoverPic = ({props}) => {
  return (
    <div
      className={`cover-img ${props.blur? "blur-img":null}`}
      style={{ width: window.innerWidth <= 1275 ? "1275px" : "100%" }}
    >
      <img src={pic7} />
    </div>
  );
};

export default CoverPic;
