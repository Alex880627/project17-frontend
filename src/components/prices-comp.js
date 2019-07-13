import React from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import pricesIcon from "../pic/icons/wallet-icon.png";

const PricesComp = props => {
  let prices = "HU";
  props.language === "HU" ? (prices = hu.prices) : (prices = en.prices);
  return (
    <div className="prices-wrapper" id="prices">
      <div className="prices-heading">
        <h3>{prices["prices title"]}</h3>
        <img src={pricesIcon} />
      </div>
      <div className="treatements-list-wrapper">
      {prices.treatments.map(element => {
        return (
          <div className="treatements-list">
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
