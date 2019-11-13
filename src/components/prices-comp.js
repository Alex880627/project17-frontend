import React from "react";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import pricesIcon from "../pic/icons/wallet-icon.png";
import Scroll from "react-scroll";

const PricesComp = props => {
  const Link = Scroll.Element;
  let prices = "HU";
  props.language === "HU" ? (prices = hu.prices) : (prices = en.prices);
  return (
    <div className="prices-wrapper" id="prices">
      <Link name="prices"></Link>
      <div className="prices-heading">
        <h3>{prices["prices title"]}</h3>
        <img src={pricesIcon} alt="price icon" />
      </div>
      <div className="treatments-list-wrapper">
        {prices.treatments.map(element => {
          return (
            <div className="treatments-list" key={element.name}>
                <p>{element.name}</p>
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
