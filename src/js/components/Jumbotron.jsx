import React from "react";

function Jumbotron() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="p-5 my-5 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Bienvenido!</h1>
            <p className="col-md-8 fs-4">
              lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Llevatelo todo!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
