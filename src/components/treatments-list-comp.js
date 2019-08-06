import React, { useState, useRef } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import treatmentsIcon from "../pic/icons/treatments-icon.png";

const TreatementDropdown = ({ element }) => {
  const treatmentRef = useRef(null);
  const arrowRef = useRef(null);
  const [visiblity, setVisiblity] = useState(true);
  const changeHeight = () => {
    const currentElement = treatmentRef.current;
    currentElement.style.height === "3em"
      ? (currentElement.style.height = `${(currentElement.scrollHeight / 100) *
          6}em`)
      : (currentElement.style.height = "3em");
    currentElement.parentNode.childNodes.forEach(element => {
      return element !== treatmentRef.current
        ? (element.style.height = "3em")
        : null;
    });
    currentElement.style.height==="3em"? setVisiblity("4em"):setVisiblity("3em");
  };
  return (
    <div
      className="treatment"
      onClick={changeHeight}
      style={{ height: "3em", transition: "height 0.5s" }}
      ref={treatmentRef}
    >
      <div
        class="arrow-down"
        ref={arrowRef}
        style={visiblity === "3em" ? { opacity: "0" } : null}
      />
      <h3>{element.title}</h3>
      <p>{element.description}</p>
    </div>
  );
};

const TreatmentsListComp = props => {
  let treatments;
  props.language === "HU"
    ? (treatments = hu.treatments)
    : (treatments = en.treatments);
  return (
    <div className="transperent-wrapper" id="treatments">
      <div className="blur-wrapper" />
      <div className="heading">
        <h3>{treatments["treatments title"]}</h3>
        <img src={treatmentsIcon} alt="treatments icon" />
      </div>
      <div className="treatments-wrapper">
        {treatments["treatments list"].map(element => {
          return <TreatementDropdown element={element} />;
        })}
      </div>
    </div>
  );
};

export default TreatmentsListComp;
