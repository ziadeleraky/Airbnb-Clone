import React from "react";
import "./Card.css";

function Card(props) {
  let badgeText;
  if (!props.openSpots) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  console.log(props);
  return (
    <div className="caard col-lg-3 col-md-4 text-md-start text-center">
      <div className="card-top">
        <img src={`/src/assets/imgs/${props.coverImg}`} className="rounded-4" />
        {badgeText && <span className="rounded fw-bold">{badgeText}</span>}
      </div>
      <div className="card-body">
        <div className="d-flex align-items-center my-1 justify-content-center justify-content-md-start">
          <img src="/src/assets/imgs/star.png" className="star me-1" />
          <span>{props.stats.rating}</span>
          <span className="text-secondary">
            ({props.stats.reviewCount}) . {props.location}
          </span>
        </div>
        <p className="m-0">{props.title}</p>
        <p className="mt-1 mb-5">
          <span className="fw-bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
