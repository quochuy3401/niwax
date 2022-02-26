import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Main.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export const OfficeCard = (props) => {
  return (
    <div className="col-lg-4 col-sm-6  address-card my-2">
      {/* <div className="card-image shadow"></div> */}
      <img src={props.imgUrl} className="office-img shadow img-fluid"/>
      <div className="card-title">{props.city}</div>
      <p className="card-detail">{props.address}</p>
      <button type="button" className="view-button">
        View on map &nbsp;
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};
