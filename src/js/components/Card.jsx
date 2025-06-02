import React from "react";

function Card() {
  return (
    <div className="card">
      <img
        src="https://picsum.photos/400/200"
        className="card-img-top"
        alt="card image"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Me lo llevo!
        </a>
      </div>
    </div>
  );
}

export default Card;
