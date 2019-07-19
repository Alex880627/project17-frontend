import React, { useEffect } from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import pricesIcon from "../pic/icons/wallet-icon.png";

const PricesComp = props => {
  let prices = "HU";
  props.language === "HU" ? (prices = hu.prices) : (prices = en.prices);
  const hoverOnScroll = event => {
    const container = document.elementFromPoint(
      window.innerHeight / 2,
      window.innerWidth / 3
    );
    if (
      container.className === "treatements-list" ||
      container.parentNode.className === "treatements-list"
    ) {
      const treatementList = document.querySelector
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hoverOnScroll);
    return () => {
      window.removeEventListener("scroll", hoverOnScroll);
    };
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
