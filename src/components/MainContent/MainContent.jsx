import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <section>
      <div className="container">
        <div className="main-grid-img">
          <div className="row justify-content-center">
            <img src='/src/assets/imgs/photo-grid.png' alt="Grid image" className="col-md-8" />
          </div>
        </div>
        <div className="text-md-start text-center">
          <div className="main-text">
            <div className="row">
              <h1 className="text-center">Online Experiences</h1>
            </div>
            <div className="row paragraph justify-content-center">
              <p className="col-lg-5 col-md-6 col-10 text-center fw-normal h5 m-md-0 mx-auto">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
