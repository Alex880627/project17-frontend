import React, { useEffect } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import pricesIcon from "../pic/icons/wallet-icon.jpg";

const PricesComp = props => {
  let prices = "HU";
  props.language === "HU" ? (prices = hu.prices) : (prices = en.prices);
  let prevContainer = "";
  const hoverOnScroll = () => {
    if (window.innerWidth < 769) {
      const container = document.elementFromPoint(
        window.innerWidth / 2,
        (window.innerHeight / 3) * 2
      );
      if (
        (prevContainer !== "" &&
          prevContainer !== container &&
          container.className === "treatements-list") ||
        (container.parentElement.id === "root" && prevContainer !== "")
      ) {
        prevContainer.classList.remove("onhover");
      }
      if (container.className === "treatements-list") {
        if (!container.classList.contains("onhover")) {
          container.classList.add("onhover");
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
  return (
    <div className="prices-wrapper" id="prices">
      <div className="prices-heading">
        <h3>{prices["prices title"]}</h3>
        <img src={pricesIcon} alt="price icon" />
      </div>
      <div className="treatements-list-wrapper">
        {prices.treatments.map(element => {
          return (
            <div className="treatements-list" key={element.name}>
              <h3>{element.name}</h3>
              <p>{element.price}</p>
              <p>{`/${prices.occasion} (${element.duration})`}</p>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricesComp;
