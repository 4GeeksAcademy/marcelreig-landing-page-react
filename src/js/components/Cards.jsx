import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="row">
      <div className="col-12 col-sm-4 col-lg-3 mb-2">
        <Card />
      </div>
      <div className="col-12 col-sm-4 col-lg-3 mb-2">
        <Card />
      </div>
      <div className="col-12 col-sm-4 col-lg-3 mb-2">
        <Card />
      </div>
      <div className="col-12 col-sm-4 col-lg-3 mb-2">
        <Card />
      </div>
    </div>
  );
}

export default Cards;
