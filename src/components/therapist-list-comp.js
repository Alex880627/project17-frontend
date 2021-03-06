import React, { useState, useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import therapists from "../pic/icons/therapists.png";
import phone from "../pic/icons/phone.png";
import mail from "../pic/icons/mail-white.png";
import pic1 from "../pic/theraphists/pic1.jpg";
import pic2 from "../pic/theraphists/pic2.jpg";
import pic3 from "../pic/theraphists/pic3.jpg";
import pic1hover from "../pic/theraphists/pic1hover.jpg";
import pic2hover from "../pic/theraphists/pic2hover.jpg";
import pic3hover from "../pic/theraphists/pic3hover.jpg";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import Scroll from "react-scroll";

const TherapistListComp = props => {
  const Link = Scroll.Element;
  let collagues;
  props.language === "HU"
    ? (collagues = hu.collagues)
    : (collagues = en.collagues);
  const picArray = [pic1, pic2, pic3];
  const picArrayHover = [pic1hover, pic2hover, pic3hover];
  const [currentTherapist, setCurrentTherapist] = useState("");
  const [animation, setAnimation] = useState("");
  const [animationBackground, setAnimationBackground] = useState("");
  let prevContainer = "";
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
    if (
      event.target !== container &&
      !Array.from(container.querySelectorAll("*")).includes(event.target)
    ) {
      resetTherapistByOnclick();
    }
  };
  const hoverOnScroll = () => {
    if (window.innerWidth < 769) {
      const container = document.elementFromPoint(
        window.innerWidth / 2,
        (window.innerHeight / 3) * 2
      );
      if (
        (prevContainer !== "" &&
          prevContainer !== container &&
          container.parentElement.className === "therapist") ||
        (container.parentElement.id === "root" && prevContainer !== "")
      ) {
        prevContainer.parentElement.classList.remove("threapist-mobile-view");
      }
      if (container.parentElement.className === "therapist") {
        if (
          !container.parentElement.classList.contains("threapist-mobile-view")
        ) {
          container.parentElement.classList.add("threapist-mobile-view");
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
    <>
      <div className="therapist-wrapper" id="colleagues">
        <Link name="colleagues"></Link>
        <div className="heading">
          <h3>{collagues.collagues}</h3>
          <img src={therapists} alt="therapist icon" />
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
                  onMouseUp={setTherapistByOnclick}
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
        <ThreapistDetailsComp
          animation={animation}
          data={collagues.therapists}
          currentTherapist={currentTherapist}
          animationBackground={animationBackground}
          closeThePopUp={closeThePopUp}
          resetTherapistByOnclick={resetTherapistByOnclick}
          picArrayHover={picArrayHover}
          openModal={props.openModal}
        />
      ) : null}
    </>
  );
};

const ThreapistDetailsComp = ({
  animation,
  data,
  currentTherapist,
  animationBackground,
  closeThePopUp,
  resetTherapistByOnclick,
  picArrayHover,
  openModal
}) => {
  return (
    <div
      className="therapist-details-container"
      id={animationBackground}
      onMouseUp={closeThePopUp}
    >
      <div className="close-button" onClick={resetTherapistByOnclick} />
      <div className="therapist-details" id={animation}>
        {data.map((element, index) => {
          return element.name === currentTherapist ? (
            <>
              <div className="therapist-heading">
                <div>
                  <h3>{element.name}</h3>
                  <p>{`${element.occupation}`}</p>
                </div>
                  <img src={picArrayHover[index]} />
              </div>
              <div className="content-box">
                <div className="details">
                  <div className="therapist-techniques">
                    {/* <h4>{element.techniques.title}</h4> */}
                    {element.techniques.data.map(techniq => {
                      return (
                        <Chip variant="outlined" size="small" label={techniq} />
                      );
                    })}
                  </div>
                  <div className="therapist-contacts">
                    {/* <h4>{element.techniques.title}</h4> */}
                    <div className="phone">
                      <div>
                        <img src={phone} />
                      </div>
                      <a href={`tel: +36${element["phone number"]}`}>
                        {element["phone number"]}
                      </a>
                    </div>
                    <div className="email">
                      <div>
                        <img src={mail} />
                      </div>
                      <p
                        onClick={() => {
                          openModal();
                        }}
                      >
                        {element["email"]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="therapist-content">{element.details}</p>
            </>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default TherapistListComp;
