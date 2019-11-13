import React, { useRef, useEffect, useState } from "react";
import Scroll from "react-scroll";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import treatmentsIcon from "../pic/icons/treatments-icon.png";



const TreatementDropdown = ({ element }) => {
  const [open, setOpen] = useState(false);
  let treatmentRef = useRef(null);
  useEffect(() => {
    if (!treatmentRef.current) {
      treatmentRef.current = true;
    } else {
      treatmentRef.current.style.height === "3em"? setOpen(false):setOpen(true)
    }
  });

  const changeHeight = () => {
    let currentElement = treatmentRef.current;
    if(currentElement){
      if (currentElement.style.height === "3em") {
        open ? setOpen(false) : setOpen(true);
        currentElement.style.height = `${(currentElement.scrollHeight / 100) *
          6}em`;
          currentElement.style.borderBottom = '1px solid rgb(143, 143, 143)';
          currentElement.style.margin = '13px';
      } else {
        currentElement.style.height = "3em";
        currentElement.style.margin = '0px';
        currentElement.style.borderBottom = '0px solid black'
        setOpen(false);
      }
      currentElement.parentNode.childNodes.forEach(element => {
        element.childNodes[0].style.transform = "scaleY(1)";
        return element !== treatmentRef.current
          ? (element.style.height = "3em", element.style.margin = '0px', element.style.borderBottom = '0px solid black')
          : null;
      });
    }
  };
  return (
    <div
      className="treatment"
      onClick={changeHeight}
      style={{
        height: "3em",
        transition: "all 0.3s",
        cursor: "pointer"
      }}
      ref={treatmentRef}
    >
      <div
        className="load-more"
        style={window.innerWidth > 768 ? { cursor: "pointer" } : null}
        style={
          open === true
            ? { transform: "scaleY(-1)", transition: "transform 0.1s"}
            : { transform: "scaleY(1)", transition: "transform 0.1s"}
        }
      />
      <h3>{element.title}</h3>
      <p>{element.description}</p>
    </div>
  );
};

const TreatmentsListComp = props => {
  const Link = Scroll.Element;
  let treatments;
  props.language === "HU"
    ? (treatments = hu.treatments)
    : (treatments = en.treatments);
  return (
    <div className="treatments-section-wrapper" id="treatments">
      <Link name="treatements"></Link>
      <div className="heading">
        <h3>{treatments["treatments title"]}</h3>
        <img src={treatmentsIcon} alt="treatments icon" />
      </div>
      <div className="treatments-wrapper">
        {treatments["treatments list"].map(element => {
          return <TreatementDropdown key={element.title} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TreatmentsListComp;
