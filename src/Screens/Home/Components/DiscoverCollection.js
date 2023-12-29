import React, {useState} from "react";
import "./DiscoverCollection.css";
import { MdOutlineArrowBackIos, MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function DiscoverCollection() {
  const [imageArr, setImagesArr] = useState([
    "url(images/scroller_images/scroller_1.png)",
    "url(images/scroller_images/scroller_2.png)",
    "url(images/scroller_images/scroller_3.png)",
  ])
  const [index, setIndex] = useState(1)
  const images = [
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
    "url(images/collection_color/ESSENTIAL/ES_Bianco_Puro.jpg)",
  ]
  const changeFunction = (isNext) => {
    if(isNext){
      if(index === 8) {
        setIndex(1)
      } else {
        setIndex(index + 1)
      }
    } else{
      if(index === 1) {
        setIndex(8)
      } else {
        setIndex(index - 1)
      }
    }
  }
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
        <div
          className="discovercollection-carouse-sideimage"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index}.jpg)`,
          }}
        >
          <MdOutlineArrowBackIos
            onClick={() => changeFunction(false)}
            color="white"
            size={20}
            className="discovercollection-arrow"
          />
        </div>
        <div
          className="discovercollection-carouse-image"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index+1}.jpg)`,
          }}
        />
        <div
          className="discovercollection-carouse-sideimage"
          style={{
            backgroundImage: `url(images/scroller_images/scroller_${index+2}.jpg)`,
          }}
        >
          <MdOutlineArrowForwardIos
            onClick={() => changeFunction(true)}
            color="white"
            size={20}
            className="discovercollection-arrow"
          />
        </div>
      </div>
      <div className="home-discovercollection-container">
      <Link
        to={"/quartz-collection"}
        className="home-discovercollection-button"
      >
        See More
      </Link>
      </div>
    </div>
  );
}

export default DiscoverCollection;
