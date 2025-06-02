import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="row">
      <div className="col-12 d-flex gap-3 flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
