import React from "react";
import "./OurMission.css";
import OurMissionImage from "../../../assets/images/ourmission.png";
function OurMission() {
  return (
    <div className="reorganize_container">
      <div className="ourmission-container">
        <div className="ourmission-heading">MORE ABOUT WARRANTY</div>
        <hr style={{ margin: "20px 0px", border: '0.5px solid #D9D9D9', opacity: 0.9}} />
        <div className="ourmission-subcontainer">
          <div className="ourmission-innercontainer">
            <img className="ourmission-image" src={OurMissionImage} />
          </div>
          <div className="ourmission-innercontainer">
            <b>WARRANTY COVERS:</b>This limited warranty extends to Sharifstone®
            Surfaces that have been purchased from an Authorized Sharifstone®
            Installer/Dealer and which have been installed in your residence
            location by an Authorized Installer. <br />
            <br />
            This limited warranty covers Surfaces that have been maintained
            according to the Sharifstone® Surfaces Care and Maintenance as well
            as accepted standards for engineered Quartz surfaces. A guideline of
            the maintenance care is provided here in this same page. <br />
            <br />
            <b>What it covers in detail:</b> Defects due to manufacturing
            process.An inspection will be carried out for any claim on installed
            Surfaces covered during the Warranty coverage period.If they are
            deemed due to manufacturing defects, the warranty will cover the
            replacement of the Surface for the same material or comparable at
            the time of the claim. <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
