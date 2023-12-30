import React from "react";
import "./OurMission.css";
import OurMissionImage from "../../../assets/images/ourmission.png";
function OurMission() {
  return (
    <div className="reorganize_container">
      <div className="ourmission-container">
        <div className="ourmission-heading">OUR MISSION. VISION, AND GOAL</div>
        <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9}} />
        <div className="ourmission-cover ourmission-subcontainer">
          <div className="ourmission-innercontainer">
            <img className="ourmission-image" src={OurMissionImage} />
          </div>
          <div className="ourmission-innercontainer">
            <div className="ourmission-details">
              Our mission is to provide superior quality stone slabs that
              enhance the transformation of living spaces, ensuring utmost
              client satisfaction through dependable service and premium product
              offerings. <br />
              <br />
              We aspire to be one of the globally leading companies in the stone
              industry, renowned for our commitment to excellence and
              unparalleled service.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
