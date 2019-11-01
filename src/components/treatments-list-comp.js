import React, { useRef, useEffect, useState } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import treatmentsIcon from "../pic/icons/treatments-icon.png";

const TreatementDropdown = ({ element }) => {
  const [hover, setHover] = useState(0);
  const [open, setOpen] = useState(false);
  let prevContainer = "";
  const treatmentRef = useRef(null);
  const currentElement = treatmentRef.current;
  const changeHeight = () => {
    if (currentElement.style.height === "3em") {
      open ? setOpen(false) : setOpen(true);
      currentElement.style.height = `${(currentElement.scrollHeight / 100) *
        6}em`;
    } else {
      currentElement.style.height = "3em";
      setOpen(false);
    }
    currentElement.parentNode.childNodes.forEach(element => {
      element.childNodes[0].style.transform = "scaleY(1)";
      return element !== treatmentRef.current
        ? (element.style.height = "3em")
        : null;
    });
  };
  const hoverOnScroll = () => {
    if (window.innerWidth < 769) {
      const container = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 3
      );
      if (
        (prevContainer !== "" &&
          prevContainer !== container &&
          container.parentElement.className === "treatment") ||
        (container.parentElement.id === "root" && prevContainer !== "")
      ) {
        prevContainer.parentElement.classList.remove("treatments-mobile-view");
      }
      if (container.parentElement.className === "treatment") {
        if (
          !container.parentElement.classList.contains("treatments-mobile-view")
        ) {
          container.parentElement.classList.add("treatments-mobile-view");
        }
        prevContainer = container;
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hoverOnScroll);
    return () => {
      window.removeEventListener("scroll", hoverOnScroll);
    };
    // eslint-disable-next-line
  }, []);
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      currentElement.style.height === "3em"? setOpen(false):setOpen(true)
    }
  });
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
      onMouseEnter={() => {
        setHover(1);
      }}
      onMouseLeave={() => {
        setHover(0);
      }}
    >
      <div
        className="arrow-down"
        style={window.innerWidth > 768 ? { cursor: "pointer" } : null}
        style={
          open === true
            ? { transform: "scaleY(-1)", transition: "transform 0.3s" }
            : { transform: "scaleY(1)", transition: "transform 0.3s" }
        }
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
          return <TreatementDropdown key={element.title} element={element} />;
        })}
      </div>
    </div>
  );
};

export default TreatmentsListComp;
