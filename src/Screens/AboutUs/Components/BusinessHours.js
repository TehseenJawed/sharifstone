import React from "react";
import "./BusinessHours.css";
import Reception from "../../../assets/images/reception.png";
import { TbClockHour5 } from "react-icons/tb";

function BusinessHours() {
  const hours = [
    {
      day: "Monday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Tuesday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Wednesday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Thursday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Friday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Saturday",
      time: "8:00 AM - 8:00 PM",
    },
    {
      day: "Sunday",
      time: "Sunday: (10:00 – 4:00pm) for Sharifstone Orlando only",
    },
  ];
  return (
    <div className="reorganize_container">
      <div className="ourmission-container">
        <div className="ourmission-heading">BUSINESS HOURS</div>
        <hr style={{ margin: "20px 0px" }} />
        <div className="ourmission-subcontainer">
          <div className="ourmission-innercontainer">
            {hours.map((v, i) => (
              <div className="businesshour-row">
                <div className="business-time">
                  <TbClockHour5 size={30} color={"#EE2A2E"} />
                  <div>{v.day}</div>
                </div>
                <div className="business-timing">{v.time}</div>
              </div>
            ))}
          </div>
          <div className="ourmission-innercontainer">
            <img className="ourmission-image" src={Reception} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessHours;
