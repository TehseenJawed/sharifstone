import React from "react";
import "./DiscoverCollection.css";
import { MdOutlineArrowBackIos, MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function DiscoverCollection() {
  return (
    <div className="home-discovercollection">
      <div className="home-discovercollection-heading">
        DISCOVER OUR NEW COLLECTION
      </div>
      <div className="home-desciption">
        For over three decades, we’ve been crafting the most trusted countertops
        by blending exquisite design with top durability. Join us on a journey
        of partnership and creativity, to fulfill your dream with the countertop
        that brings it to life.
      </div>
      <div className="discovercollection-carousel">
        <div className="discovercollection-carouse-sideimage">
            <MdOutlineArrowBackIos color="white" size={20} className="discovercollection-arrow"/>
        </div>
        <div className="discovercollection-carouse-image" />
        <div className="discovercollection-carouse-sideimage">
        <MdOutlineArrowForwardIos color="white" size={20} className="discovercollection-arrow"/>
        </div>
      </div>
      <div className="home-discovercollection-button">See More</div>
    </div>
  );
}

export default DiscoverCollection;
