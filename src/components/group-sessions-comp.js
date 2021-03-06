import React from "react";
import Scroll from "react-scroll";
import hu from "../assets/languages/lang-hu.json";
import en from "../assets/languages/lang-en.json";
import mockdata from "../assets/languages/mock-server-data.json";
import groupIcon from "../pic/icons/group-icon.png";

const GroupSessionsContainer = props => {
  const Link = Scroll.Element;
  let groupSessions = "HU";
  props.language === "HU"
    ? (groupSessions = hu["group sessions"])
    : (groupSessions = en["group sessions"]);
  const makeMultiArrayFromDataByHours = objArray => {
    objArray.sort((a, b) => parseFloat(a.hour) - parseFloat(b.hour));
    let resultArr = [];
    let objOfHours = {};
    objArray.forEach(element =>
      objOfHours[element.hour] === undefined
        ? (objOfHours[element.hour] = "0")
        : null
    );
    for (let a = 0; a < Object.keys(objOfHours).length; a++) {
      let newArr = [];
      for (let i = 0; i < objArray.length; i++) {
        if (Object.keys(objOfHours)[a] === objArray[i].hour) {
          newArr.push(objArray[i]);
        }
      }
      resultArr.push(newArr);
    }
    return resultArr;
  };
  return (
    <>
      <div className="group-sessions-wrapper" id="group-sessions">
        <Link name="group sessions"></Link>
        <div className="heading">
          <h3>{groupSessions["group sessions title"]}</h3>
          <img src={groupIcon} alt="time table icon" />
        </div>
        <div className="group-sessions-description">
          <p>{groupSessions.description}</p>
          <h4>{groupSessions.interval}</h4>
        </div>
        <table>
          <tbody>
            <tr>
              <th />
              {Object.entries(groupSessions.days).map(element => {
                return <th key={element[0]}>{element[1]}</th>;
              })}
            </tr>
            {makeMultiArrayFromDataByHours(mockdata["sessions dates"]).map(
              element => {
                return (
                  <tr key={`${Math.random()}`}>
                    <td>{element[0].hour}</td>
                    {Object.keys(groupSessions.days).map(day => {
                      const filteredTableData = element.filter(data => {
                        return data.day === day;
                      });
                      return filteredTableData.length !== 0 ? (
                        <td
                          key={`${Math.random()}`}
                        >
                          {" "}
                          <h3>{filteredTableData[0].type}</h3>
                          <p><span>(</span>{filteredTableData[0].therapist}<span>)</span></p>
                        </td>
                      ) : (
                        <td key={`${Math.random()}`} /> // eslint-disable-line no-use-before-define
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupSessionsContainer;
