import React, { useState } from "react";
import icon from "../pic/theraphists/icon.svg";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";

const TherapistListComp = props => {
  let collagues;
  props.language === "HU"
    ? (collagues = hu.collagues)
    : (collagues = en.collagues);
  const picArray = collagues.therapists.map(element => element.picture);
  const picArrayHover = collagues.therapists.map(
    element => element["picture hover"]
  );
  const [currentTherapist, setCurrentTherapist] = useState("");
  const [animation, setAnimation] = useState("");
  const [animationBackground, setAnimationBackground] = useState("");
  const setTherapistByOnclick = event => {
    setAnimation("");
    setAnimationBackground("");
    setCurrentTherapist(event.target.id);
  };
  const resetTherapistByOnclick = () => {
    setAnimation("fade-out");
    setAnimationBackground("fade-out-background");
    setTimeout(() => {
      setCurrentTherapist("");
    }, 500);
  };
  const closeThePopUp = event => {
    const container = document.getElementsByClassName("therapist-details")[0];
    if (event.target !== container && !Array.from(container.querySelectorAll("*")).includes(event.target)) {
      resetTherapistByOnclick();
    }
  };
  return (
    <>
      <div className="therapist-wrapper" id="collagues">
        <div className="therapist-heading">
          <h3>{collagues.collagues}</h3>
          <img src={icon} alt="therapist icon" />
        </div>
        <div className="therapist-pictures">
          {picArray.map((element, index) => {
            return (
              <div className="therapist" key={element}>
                <img
                  key={`${element} image`}
                  src={element}
                  onMouseOver={e => {
                    e.currentTarget.src = picArrayHover[index];
                  }}
                  onMouseLeave={e => (e.currentTarget.src = element)}
                  id={collagues.therapists[index].name}
                  onClick={setTherapistByOnclick}
                  alt="studio 17 therapist"
                />
                <div className="therapist-info" key={`${element} info`}>
                  <h4>{collagues.therapists[index].name}</h4>
                  <p>{collagues.therapists[index].occupation}</p>
                  <button>{collagues.details}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {currentTherapist !== "" ? (
        <div
          className="therapist-details-container"
          id={animationBackground}
          onMouseUp={closeThePopUp}
        >
          <div className="close-button" onClick={resetTherapistByOnclick} />
          <div className="therapist-details" id={animation}>
            {collagues.therapists.map(element => {
              return element.name === currentTherapist ? (
                <div key={element.name}>
                  <div>
                    <h3>{element.name}</h3>
                  </div>
                  <p><h4>{`${element.occupation}`}</h4><img src={element.picture} alt={element.name}/>{element.details}</p>
                </div>
              ) : null;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TherapistListComp;
