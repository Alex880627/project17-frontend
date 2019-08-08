import React from "react";

const NoMatchComponent = () => (
  <div className="nomatch-comp">
    <form action="/">
      <h1>{"404"}</h1>
      <button type="submit">{"Vissza a főoldalra"}</button>
    </form>
  </div>
);

export default NoMatchComponent;
