import React from "react";
import "./OurLocation.css";
import OrlandoMap from '../../../assets/images/orlando_map.png' 
import TampaMap from '../../../assets/images/tampa_map.png' 

function OurLocation() {
  return (
    <div className="reorganize_container">
      <div className="ourmission-container">
        <div className="ourmission-heading">OUR LOCATIONS</div>
        <hr style={{ margin: "20px 0px" }} />
        <div className="ourmission-subcontainer">
          <div className="ourmission-innercontainer">
            <img className="ourmission-image" src={OrlandoMap} />
            <div className="location-name">ORLANDO</div>
            <div>2440 Dinneed Ave. Orlando, FL 32804</div>
          </div>
          <div className="ourmission-innercontainer">
            <img className="ourmission-image" src={OrlandoMap} />
            <div className="location-name">TAMPA</div>
            <div>8524 E. Adamo Dr. Tampa, FL 33619</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OurLocation;
