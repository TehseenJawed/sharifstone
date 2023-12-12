import React, {useState} from "react";
import "./quatzDropdown.css";
import EssentialCollectionImage from "../assets/images/essential_dropdown_image.png";
import IndulgeCollectionImage from "../assets/images/international_dropdown_image.png";
import MythologyCollectionImage from "../assets/images/mythology_dropdown_image.png";
import InternationalCollectionImage from "../assets/images/international_dropdown_image.png";
import SuperJumboCollectionImage from "../assets/images/superjumbo_dropdown_image.png";
import DropdownIcon from '../assets/images/dropdown-icon.png'
import { Link } from "react-router-dom";
const QuartzDropdown = ({navState}) => {
    const [hover, setHover] = useState("")
  const dropdown = [
    {
      title: "Essentials Collection",
      image: EssentialCollectionImage,
      backURL: "url(images/essential_dropdown_image.png)",
    },
    {
      title: "Indulge Collection",
      image: IndulgeCollectionImage,
      backURL: "url(images/international_dropdown_image.png)",
    },
    {
      title: "Mythology Collection",
      image: MythologyCollectionImage,
      backURL: "url(images/mythology_dropdown_image.png)",
    },
    {
      title: "International Collection",
      image: InternationalCollectionImage,
      backURL: "url(images/international_dropdown_image.png)",
    },
    {
      title: "Super Jumbo Collection",
      image: SuperJumboCollectionImage,
      backURL: "url(images/superjumbo_dropdown_image.png)",
    },
  ];
  return (
    <div className="dropdown-container" >
      {dropdown.map((v, i) => (
        <div
          onMouseEnter={() => setHover(v.title)}
          onMouseLeave={() => setHover('')}
          onClick={() => navState.setShowDropdown(false)}
          className="dropdown-item"
          style={{ backgroundImage: hover === v.title ? v.backURL : '' }}
        >
          <div className="dropdown-item-text" style={{color: hover === v.title ? '#fff' : ''}}>{v.title}</div>
          <Link to="/quartz-collection">
          {
             hover === v.title ? <img src={DropdownIcon} alt="" /> : <img src={v.image} alt="" />
          }
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuartzDropdown;
